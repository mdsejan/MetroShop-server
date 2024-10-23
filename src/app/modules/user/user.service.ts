import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

// signup service
const signupUserIntoDB = async (payload: IUser) => {
  if (!payload) {
    throw new Error("Data is undefined or null");
  }
  const email = payload.email;
  const userExist = await UserModel.findOne({ email: email });
  if (userExist) {
    throw new Error("User already exists");
  }
  const result = await UserModel.create(payload);
  return result;
};

// login service
const loginUserIntoDB = async (email: string, password: string) => {
  if (!email && !password) {
    throw new Error("Email and password are required");
  }

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Password is incorrect");
  }

  return user;
};

// ===> Get User By ID <===
const getUserByIdFromDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

// ===> Update User <===
const updateUserIntoDB = async (id: string, payload: Partial<IUser>) => {
  const result = await UserModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// ===> Delete a User <===
const deleteUserFromDB = async (id: string) => {
  const result = await UserModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const userServices = {
  signupUserIntoDB,
  loginUserIntoDB,
  getUserByIdFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
