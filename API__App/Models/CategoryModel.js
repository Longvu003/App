const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  categoryName: { type: String },
  isDeletedCategory: { type: Boolean, default: false },
  imageCategory: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Category", Category);
