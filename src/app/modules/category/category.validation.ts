import { z } from "zod";

const categoryValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Category name is required"),
    description: z.string().optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const CategoryValidation = {
  categoryValidationSchema,
};
