import { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String },
  isDeleted: { type: Boolean, default: false },
});

export const CategoryModel = model<ICategory>("Category", CategorySchema);
