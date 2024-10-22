import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// ===> Create Product Into Database <===
const createProductIntoDb = async (data: IProduct) => {
  const result = await ProductModel.create(data);
  return result;
};

// ===> Update Product <===
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  updateProductIntoDB,
};
