import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// ===> Create Product Into Database <===
const createProductIntoDb = async (data: IProduct) => {
  const result = await ProductModel.create(data);
  return result;
};

export const ProductServices = {
  createProductIntoDb,
};
