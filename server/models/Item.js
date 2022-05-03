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
  dateOfPurchase: { type: String },
  item: {
    _id: ID,
    type: String,
    name: String,
    description: String,
    dateOfPurchase: String,
    imgURL,
    reminder,
    obtained,
    required: true,
    unique: true,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
