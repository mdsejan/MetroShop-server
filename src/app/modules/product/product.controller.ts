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

// ===> Get Products with Search, Filters, and Pagination <===
const getProducts = catchAsync(async (req, res) => {
  const {
    keyword,
    category,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
  } = req.query;

  const filterOptions: any = {};

  // Search by keyword
  if (keyword) {
    filterOptions.name = { $regex: keyword, $options: "i" };
  }

  // Filter by category
  if (category) {
    filterOptions.category = category;
  }

  // Filter by price range
  if (minPrice || maxPrice) {
    filterOptions.price = {};
    if (minPrice) filterOptions.price.$gte = Number(minPrice);
    if (maxPrice) filterOptions.price.$lte = Number(maxPrice);
  }

  // Pagination options
  const skip = (Number(page) - 1) * Number(limit);

  const { products, totalProducts } = await ProductServices.getProductsFromDB(
    filterOptions,
    skip,
    Number(limit)
  );

  if (!products || products.length === 0) {
    return noDataFound(res);
  }

  // paginated products and total count
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Products retrieved successfully",
    data: {
      products,
      pagination: {
        total: totalProducts,
        currentPage: Number(page),
        totalPages: Math.ceil(totalProducts / Number(limit)),
      },
    },
  });
});

// ===> Update Product By Id <===
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductIntoDB(id, req.body);

  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product updated successfully",
    data: result,
  });
});

// ===> Delete a Product <===
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await ProductServices.deleteProductFromDB(id);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Product deleted successfully",
    data: "",
  });
});

export const productControllers = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
