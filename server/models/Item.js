const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: "You must have a name of the item!",
    trim: true,
  },

  description: {
    type: String,
    required: "You must have a description!",
    minlength: 1,
    maxlength: 280,
  },

  dateOfPurchase: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  reminder: {
    type: Boolean,
    required: true,
  },
  obtained: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
