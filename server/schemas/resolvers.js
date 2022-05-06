const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }, context) => {
      // if (context.user) {
      const userData = await User.findOne({
        username: username,
      })
        .populate("items")
        .select("-__v -password");

      return userData;
      // }

      throw new AuthenticationError("Not logged in");
    },
    items: async () => {
      return await Item.find();
    },
    item: async (parent, { name }) => {
      return await Item.findOne({ name: name });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveItem: async (parent, { itemData }, context) => {
      if (context.user) {
        console.log(itemData);
        const item = await Item.create({ ...itemData });
        const user = await User.findOneAndUpdate(
          {
            username: context.user.username,
          },
          { $addToSet: { items: item._id } }
        );
        console.log(item, user);
        return item;
      }

      // throw new AuthenticationError("You need to be logged in!");
    },
    removeItem: async (parent, { itemId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { item: { itemId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
