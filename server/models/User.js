const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Item.js
const itemSchema = require("./Item");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    // set item to be an array of data that adheres to the itemSchema
    item: [itemSchema],
  },
  // set to use virtual below
  { toJSON: { virtuals: true } }
);

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
