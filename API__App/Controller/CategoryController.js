const { error } = require("console");
const CategoryModel = require("../Models/CategoryModel");
const addCategory = async (categoryName, imageCategory) => {
  try {
    const itemCheck = await CategoryModel.findOne({ categoryName });
    if (itemCheck) {
      return { error: true, message: "Sản phẩm đã tồn tại !" };
    }
    const item = new CategoryModel({
      categoryName,
      imageCategory,
    });

    await item.save();
    return item;
  } catch (error) {
    return { error: true };
  }
};

const deleteCategory = async (idCategory) => {
  try {
    const item = await CategoryModel.findOne({ _id: idCategory });
    if (!item) {
      return { error: true };
    }
    item.isDeletedCategory = true;
    await item.save();
    return item;
  } catch (error) {
    return { error: true };
  }
};

const updateCategory = async (idCategory, categoryName, imageCategory) => {
  try {
    const item = await CategoryModel.findById({ _id: idCategory });
    if (!item) {
      return { error: true, message: "Không tìm thấy sản phẩm !" };
    }
    const checkProduct = await CategoryModel.findOne({ categoryName });
    if (checkProduct && checkProduct._id !== idCategory) {
      return { error: true, message: "Tên danh mục đã tồn tại !" };
    }
    item.categoryName = categoryName;
    item.imageCategory = imageCategory;
    await item.save();
    return item;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

const getCategory = async () => {
  try {
    const item = await CategoryModel.find({});
    return item;
  } catch (error) {
    return { error: true };
  }
};
module.exports = { addCategory, deleteCategory, updateCategory, getCategory };
