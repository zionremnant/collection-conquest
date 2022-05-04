const { Schema, model } = require("mongoose");
const User = require("./User");

const itemSchema = new Schema({
  name: {
    type: String,
    required: "You must have a name of the item!",
    trim: true,
    unique: true,
  },

  description: {
    type: String,
    required: "You must have a description!",
    minlength: 1,
    maxlength: 280,
  },

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  dateOfPurchase: { type: String },

  reminder: { type: Boolean, allowNull: false },

  imageUrl: { type: DataTypes, String },

  obtained: { type: Boolean, allowNull: false },
});

  dateOfPurchase: {
    type: String,
    required: true,
    unique: true,
  },
  imageURL: {
    type: String,
    required: true,
    unique: true,
  },
  reminder: {
    type: Boolean,
    required: true,
    unique: true,
  },
  obtained: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
  },
},
);

const Item = model("Item", itemSchema);

module.exports = Item;
