const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: String,
  text: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  sizes: [String],
  images: [String],
  reviews: [reviewSchema],
});

module.exports = mongoose.model("Product", productSchema);
