const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController");
route.post("/Signup", async (req, res) => {
  try {
    const { Email, password } = req.body;
    const user = await UserController.SignUp(
      // userName,
      // numberPhone,
      Email,
      password
    );

    if (!user) {
      return res.status(404).json({ message: "Có lỗi khi tạo người dùng !" });
    } else if (user.error) {
      return res.status(400).json({ error: true, message: user.message });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(505).json({ message: "Lỗi Server !" });
  }
});

route.post("/Login", async (req, res) => {
  try {
    const { Email, password } = req.body;

    const user = await UserController.Login(Email, password);
    if (!user) {
      return res.status(404).json(user);
    } else if (user.error) {
      return res.status(400).json(user);
    }
    res.status(200).json({ user });
  } catch (error) {
    return res.status(505).json({ message: "Lỗi server !" });
  }
});

route.delete("/deleteUser", async (req, res) => {
  try {
    const { idUser } = req.body;
    const user = await UserController.deleteUser(idUser);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng !" });
    } else if (user.error) {
      return res.status(400).json({ message: user.message });
    }
    return res.status(200).json({ message: "Xóa thành công" });
  } catch (error) {
    return res.status(505).json({ message: "Lỗi Server !" });
  }
});

route.get("/getUser", async (req, res) => {
  try {
    const user = await UserController.getUser();
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "lỗi Sever !" });
  }
});

route.put("/updateUser", UserController.updateUser);
module.exports = route;
