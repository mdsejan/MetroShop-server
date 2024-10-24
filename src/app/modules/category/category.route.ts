import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { CategoryControllers } from "./category.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(CategoryValidation.categoryValidationSchema),
  auth,
  isAdmin,
  CategoryControllers.createCategory
);

router.get("/", CategoryControllers.getAllCategory);
router.put("/:id", auth, isAdmin, CategoryControllers.updateCategory);
router.delete("/:id", auth, isAdmin, CategoryControllers.deleteCategory);

export const CategoryRoutes = router;
