import jwt from "jsonwebtoken";
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";
import noDataFound from "../../error/noDataFound";
import { StatusCodes } from "http-status-codes";

// ===> Register User <===
const signupUser = catchAsync(async (req, res) => {
  const data = req.body;

  if (!data) {
    throw new Error("Invalid data or null");
  }

  const result = await userServices.signupUserIntoDB(data);
  if (!result) {
    return noDataFound(res);
  }
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

// ===> Login User <===
const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await userServices.loginUserIntoDB(email, password);

  if (!user) {
    return noDataFound(res);
  }

  // create token and send to the client

  const jwtPayload = {
    userId: user._id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwtSecret as string, {
    expiresIn: "2h",
  });

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User logged in successfully",
    token: accessToken,
    data: user,
  });
});

// ===> Get User By Id <===
const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.getUserByIdFromDB(id);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User retrieved successfully",
    data: result,
  });
});

// ===> Update User <===
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.updateUserIntoDB(id, req.body);

  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User updated successfully",
    data: result,
  });
});

// ===> Delete a User <===
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await userServices.deleteUserFromDB(id);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "User deleted successfully",
    data: "",
  });
});

export const userController = {
  signupUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
};
