const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const color = new Schema({
  nameColor: { type: String },
  imgColor: { type: Array },
});

module.exports = mongoose.model("color", color);
