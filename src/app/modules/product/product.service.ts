import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// ===> Create Product Into Database <===
const createProductIntoDb = async (data: IProduct) => {
  const result = await ProductModel.create(data);
  return result;
};

// ===> Get Products from Database <===
const getProductsFromDB = async (filters: any, skip: number, limit: number) => {
  const queryFilters = { ...filters, isDeleted: false };

  const products = await ProductModel.find(queryFilters)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  //count of all filtered products for pagination
  const totalProducts = await ProductModel.countDocuments(queryFilters);

  return {
    products,
    totalProducts,
  };
};

// ===> Update Product <===
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// ===> Delete a Product <===
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getProductsFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
