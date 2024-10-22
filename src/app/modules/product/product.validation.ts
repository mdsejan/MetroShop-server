import { z } from "zod";

const productValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    stockQuantity: z
      .number()
      .min(0, "Stock quantity must be a non-negative number"),
    category: z.string().min(1, "Category is required"),
    images: z.array(z.string().url("Each image must be a valid URL")),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const ProductValidation = {
  productValidationSchema,
};
