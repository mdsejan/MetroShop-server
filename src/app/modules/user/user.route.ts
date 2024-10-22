import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";

const router = express.Router();

router.post(
  "/signup",
  auth,
  isAdmin,
  validateRequest(UserValidation.userValidationSchema),
  userController.signupUser
);
router.post("/login", userController.loginUser);
router.put("/:id", auth, isAdmin, userController.updateUser);
router.get("/user/:id", auth, isAdmin, userController.getUserById);
router.delete("/:id", auth, isAdmin, userController.deleteUser);

export const UserRoutes = router;
