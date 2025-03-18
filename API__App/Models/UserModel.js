const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  userName: { type: String },
  numberPhone: {
    type: String,
    unique: true,
    match: [/^(0|\+84)[3-9][0-9]{8,9}$/, "Số điện thoại không hợp lệ"],
  },
  Email: {
    type: String,
    required: [true, "Email không được để trống"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Email không hợp lệ"],
  },
  Address: { type: Array },
  password: {
    type: String,
    minlength: [8, "Mật khẩu phải có ít nhất 8 ký tự"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  cart: { type: Schema.Types.ObjectId, ref: "Cart" },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", User);
