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

},
);

const Item = model("Item", itemSchema);

module.exports = Item;
