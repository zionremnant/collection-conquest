const { Schema, model } = require("mongoose");

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

  reminder: { type: Boolean },

  imgURL: { type: DataTypes, String },

  // item: {
  //   _id: ID,
  //   type: String,
  //   name: String,
  //   description: String,
  //   dateOfPurchase: String,
  //   imgURL,
  //   reminder,
  //   obtained,
  // },
});

const Item = model("Item", itemSchema);

module.exports = Item;
