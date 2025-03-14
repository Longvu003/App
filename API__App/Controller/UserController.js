const { error } = require("console");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUp = async (userName, numberPhone, Email, password) => {
  try {
    const checkUser = await UserModel.findOne({ Email });
    if (checkUser) {
      throw new Error("Người dùng đã tồn tại!");
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new UserModel({
      userName,
      numberPhone,
      Email,
      password: hash,
    });
    await user.save();
    return user;
  } catch (error) {
    return { error: true };
  }
};

const Login = async (Email, password) => {
  try {
    const user = await UserModel.findOne({ Email });
    if (!user && user.isDeleted === true) {
      return { error: true, message: "Email hoặc mật khẩu không đúng!" };
    }
    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      return { error: true, message: "Mật khẩu không đúng !" };
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "my_secret_key",
      { expiresIn: "1m" }
    );
    return { userName: user.userName, Email: user.Email, token };
  } catch (error) {
    return { error: true };
  }
};

const deleteUser = async (idUser) => {
  try {
    const user = await UserModel.findOne({ _id: idUser });
    if (!user) {
      return { error: true, message: "Người dùng không tồn tại!" };
    }
    if (user.isDeleted) {
      return {
        error: true,
        message: "Người dùng đã bị xóa trước đó!",
      };
    }
    user.isDeleted = true;
    await user.save();
    return user;
  } catch (error) {
    return {
      error: true,
    };
  }
};

const getUser = async (isDeleted) => {
  try {
    const user = await UserModel.find({ isDeleted: false });
    return user;
  } catch (error) {
    return { error: true };
  }
};

module.exports = { SignUp, Login, deleteUser, getUser };
