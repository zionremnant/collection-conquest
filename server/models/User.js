const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Item.js

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
    item: [{
      type: Schema.Types.ObjectId,
      ref: "Item"
    }],
  },
  // set to use virtual below
  { toJSON: { virtuals: true } }

);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
// when we query a user, we'll also get another field called `itemCount` with the number of saved books we have
userSchema.virtual("itemCount").get(function () {
  return this.item.length;
});

const User = model("User", userSchema);

module.exports = User;
