import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(ProductValidation.productValidationSchema),
  productControllers.createProduct
);

export const ProductRoutes = router;
