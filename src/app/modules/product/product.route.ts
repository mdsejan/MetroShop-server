import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { productControllers } from "./product.controller";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidation.productValidationSchema),
  productControllers.createProduct
);

router.put("/:id", auth, isAdmin, productControllers.updateProduct);

export const ProductRoutes = router;
