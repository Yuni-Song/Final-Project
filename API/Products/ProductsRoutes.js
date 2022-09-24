import express from "express";

import {
  getallcategories,
  getAllProducts,
  getProduct,
  getAllProductByCat,
} from "./ProductsControllers.js";

// middleware specific to this route

// route handlers
export const productsrouter = express.Router();

productsrouter.use(express.json());

productsrouter.get("/products", getAllProducts);
productsrouter.get("/product/:id(\\d+)/", getProduct);
productsrouter.get("/categories", getallcategories);
productsrouter.get("/categories/:categoryId", getAllProductByCat);


