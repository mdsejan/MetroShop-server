import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { CategoryRoutes } from "../modules/category/category.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
