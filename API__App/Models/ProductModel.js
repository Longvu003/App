const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
  nameProduct: { type: String },
  priceProduct: { type: String },
  quantityProduct: { type: Number },
  quantitySold: { type: Number },
  description: { type: String },
  img: { type: Array },
  timeProduct: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("product", ProductModel);
