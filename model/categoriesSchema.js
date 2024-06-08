const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categoriesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  onHome: {
    type: Boolean,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    deafult: true,
  },
  image: {
    type: String,
    default: "https://m.media-amazon.com/images/I/71miJj-txUL._SL1500_.jpg",
    required: false,
  },
});

const Category = mongoose.model("CategorySchema", categoriesSchema);

module.exports = Category;
