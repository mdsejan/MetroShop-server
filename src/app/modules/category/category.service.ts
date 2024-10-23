import { ICategory } from "./category.interface";
import { CategoryModel } from "./category.model";

// ===> Create Category Into Database <===
const createCategoryIntoDb = async (data: ICategory) => {
  const result = await CategoryModel.create(data);
  return result;
};

// ===> Get All Category From Database <===
const getAllCategoryFromDB = async () => {
  const result = await CategoryModel.find({ isDeleted: false });
  return result;
};

// ===> Update Category <===
const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<ICategory>
) => {
  const result = await CategoryModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// ===> Delete a Category <===
const deleteCategoryFromDB = async (id: string) => {
  const result = await CategoryModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const CategoryServices = {
  createCategoryIntoDb,
  getAllCategoryFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
