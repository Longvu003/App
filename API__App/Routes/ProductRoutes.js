const productController = require("../Controller/ProductController");
const express = require("express");
const router = express.Router();

router.post("/addProduct", async (req, res) => {
  try {
    const {
      nameProduct,
      description,
      img,
      priceProduct,
      quantityProduct,
      quantitySold,
    } = req.body;
    const item = await productController.addProduct(
      nameProduct,
      description,
      img,
      priceProduct,
      quantityProduct,
      quantitySold
    );
    if (item.error) {
      return res.status(400).json({ success: false, message: item.message });
    }
    res.status(200).json({ success: true, item });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Lỗi server", details: error.message });
  }
});

router.get("/getProduct", async (req, res) => {
  try {
    const item = await productController.getProduct();
    if (!item) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
  }
});

router.put("/updateProduct", async (req, res) => {
  try {
    const {
      idProduct,
      nameProduct,
      description,
      img,
      priceProduct,
      quantityProduct,
      quantitySold,
    } = req.body;
    const item = await productController.updateProduct(
      idProduct,
      nameProduct,
      description,
      img,
      priceProduct,
      quantityProduct,
      quantitySold
    );
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy sản phẩm" });
    } else if (item.error) {
      return res
        .status(403)
        .json({ success: false, message: "Sản phẩm đã tồn tại !" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Sửa thành công", item });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Lỗi server", details: error.message });
  }
});

router.delete("/deleteProduct", async (req, res) => {
  try {
    const { idProduct } = req.body;
    const item = await productController.deleteProduct(idProduct);
    if (item.error) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy sản phẩm !" });
    }
    return res.status(200).json({ message: "Xóa thành công !" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Lỗi từ server" });
  }
});
module.exports = router;
