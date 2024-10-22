import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  isDeleted: { type: Boolean, default: false },
});

export const ProductModel = model<IProduct>("Product", ProductSchema);
