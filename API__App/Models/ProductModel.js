const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductModel = new Schema({
  nameProduct: { type: String },
  priceProduct: { type: String },
  quantityProduct: { type: Number },
  quantitySold: { type: Number },
  description: { type: String },
  img: { type: Array },
  Idcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  timeProduct: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  option: [
    {
      size: { type: mongoose.Schema.Types.ObjectId, ref: "size" },
      color: { type: mongoose.Schema.Types.ObjectId, ref: "color" },
      quantity: Number,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Product", ProductModel);
