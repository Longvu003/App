const { error } = require("console");
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
    const item = await ProductModel.find({});
    return item;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (
  idProduct,
  nameProduct,
  description,
  img,
  priceProduct,
  quantityProduct,
  quantitySold
) => {
  try {
    const product = await ProductModel.findOne({ _id: idProduct });
    if (!product) {
      return { error: true, message: "Sản phẩm không tồn tại!" };
    }
    const checkProduct = await ProductModel.findOne({ nameProduct });
    if (checkProduct && checkProduct._id.toString() !== idProduct) {
      return { error: true, message: "Sản phẩm đã tồn tại!" };
    }
    product.nameProduct = nameProduct;
    product.description = description;
    product.img = img;
    product.priceProduct = priceProduct;
    product.quantityProduct = quantityProduct;
    product.quantitySold = quantitySold;
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
      console.log("Không tìm thấy sản phẩm");
      return null;
    }
    product.isDeleted = true;
    await product.save();
    return product;
  } catch (error) {
    return { error: true };
  }
};

module.exports = { addProduct, getProduct, updateProduct, deleteProduct };
