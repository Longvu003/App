const ProductModel = require("../Models/ProductModel");

const addProduct = async (
  nameProduct,
  description,
  img,
  priceProduct,
  quantityProduct,
  quantitySold
) => {
  try {
    const checkProduct = await ProductModel.findOne({ nameProduct });
    if (checkProduct) {
      return { error: true, message: "Sản phẩm đã tồn tại" };
    }
    const item = new ProductModel({
      nameProduct,
      description,
      img,
      priceProduct,
      quantityProduct,
      quantitySold,
    });
    await item.save();
    return item;
  } catch (error) {
    return { error: true, message: "Lỗi server", details: error.message };
  }
};

const getProduct = async () => {
  try {
    const item = await ProductModel.find({ isDeleted: false });
    return item;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (idProduct, updateFields) => {
  try {
    const product = await ProductModel.findOne({ _id: idProduct });
    if (!product) {
      return { error: true, message: "Sản phẩm không tồn tại!" };
    }
    if (updateFields.nameProduct) {
      const checkProduct = await ProductModel.findOne({
        nameProduct: updateFields.nameProduct,
      });
      if (checkProduct && checkProduct._id.toString() !== idProduct) {
        return { error: true, message: "Sản phẩm đã tồn tại!" };
      }
    }
    Object.assign(product, updateFields);
    await product.save();
    return product;
  } catch (error) {
    return { error: true, message: "Lỗi server", details: error.message };
  }
};

const deleteProduct = async (idProduct) => {
  try {
    const product = await ProductModel.findOne({ _id: idProduct });
    if (!product) {
      return { message: "Không tìm thấy sản phẩm", error: true };
    }
    product.isDeleted = true;
    await product.save();
    return product;
  } catch (error) {
    return { error: true };
  }
};

const getProductById = async (idProduct) => {
  try {
    const item = await ProductModel.findOne({ _id: idProduct });
    if (!item) {
      return {
        error: true,
        message: "Không tìm thấy sản phẩm !",
      };
    }
    return item;
  } catch (error) {
    return { error: true };
  }
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
