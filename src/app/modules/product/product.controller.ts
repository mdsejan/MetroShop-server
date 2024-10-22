import { StatusCodes } from "http-status-codes";
import noDataFound from "../../error/noDataFound";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

// ===> Create Product (Only Accessible by Admin) <===
const createProduct = catchAsync(async (req, res) => {
  const ProductData = req.body;
  if (!ProductData) {
    throw new Error("Data is invalid or null");
  }

  const result = await ProductServices.createProductIntoDb(ProductData);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product added successfully",
    data: result,
  });
});

export const productControllers = {
  createProduct,
};
