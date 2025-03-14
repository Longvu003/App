const express = require("express");
const route = express.Router();
const CategoryController = require("../Controller/CategoryController");
route.post("/addCategory", async (req, res) => {
  try {
    const { categoryName, imageCategory } = req.body;
    const item = await CategoryController.addCategory(
      categoryName,
      imageCategory
    );

    if (item.error) {
      return res.status(400).json({ message: item.message });
    }
    return res.status(200).json({ message: "Tạo thành công ! " });
  } catch (error) {
    return res.status(500).json({ message: "Server error !" });
  }
});
route.delete("/deleteCategory", async (req, res) => {
  try {
    const { idCategory } = req.body;
    const item = await CategoryController.deleteCategory(idCategory);
    if (item.error) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm !" });
    }
    return res.status(200).json({ message: "Xóa thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Server error !" });
  }
});

route.put("/updateCategory", async (req, res) => {
  try {
    const { idCategory, categoryName, imageCategory } = req.body;

    const item = await CategoryController.updateCategory(
      idCategory,
      categoryName,
      imageCategory
    );
    if (!item) {
      return res.status(404).json({ message: item.message });
    } else if (item.error) {
      return res.status(400).json({ message: item.message });
    }
    return res.status(200).json({ item });
  } catch (error) {
    return res.status(505).json({ message: "Lỗi server !" });
  }
});

route.get("/getCategory", async (req, res) => {
  try {
    const item = await CategoryController.getCategory();
    if (!item) {
      return res.status(404).json({ message: "Không tìm thấy danh mục !" });
    }
    return res.status(200).json({ item });
  } catch (error) {
    return res.status(505).json({ message: "Lỗi từ Server !" });
  }
});

module.exports = route;
