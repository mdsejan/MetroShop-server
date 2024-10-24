import { StatusCodes } from "http-status-codes";
import noDataFound from "../../error/noDataFound";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

// ===> Create Category (Only Accessible by Admin) <===
const createCategory = catchAsync(async (req, res) => {
  const CategoryData = req.body;
  if (!CategoryData) {
    throw new Error("Data is invalid or null");
  }

  const result = await CategoryServices.createCategoryIntoDb(CategoryData);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Category added successfully",
    data: result,
  });
});

// ===> Get All Categorys <===
const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategoryFromDB();
  if (!result || result.length === 0) {
    return noDataFound(res);
  }
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Categorys retrieved successfully",
    data: result,
  });
});

// ===> Update Category By Id <===
const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.updateCategoryIntoDB(id, req.body);

  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Category updated successfully",
    data: result,
  });
});

// ===> Delete a Category <===
const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await CategoryServices.deleteCategoryFromDB(id);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Category deleted successfully",
    data: "",
  });
});

export const CategoryControllers = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
