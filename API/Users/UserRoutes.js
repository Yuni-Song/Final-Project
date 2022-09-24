import express from "express";

import {
  verifyLogin,
  register,
  getUserInformation,
  createUserCart,
  addProduct,
  getCart,
  deleteProductFromCart,
} from "./UsersControllers.js";

export const userRouter = express.Router();
const regex_email =
  "[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+";
userRouter.put("/user", verifyLogin);
userRouter.post("/user", register);
userRouter.get(`/user/:userId(${regex_email})`, getUserInformation);
userRouter.put(`/cart/:userId(${regex_email})`, createUserCart);
userRouter.post(`/cart/:userId(${regex_email})`, addProduct);
userRouter.get(`/cart/:userId(${regex_email})`, getCart);
userRouter.delete(
  `/cart/:userId(${regex_email})/products/:id`,
  deleteProductFromCart
);
