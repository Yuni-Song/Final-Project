import * as productModel from "./productsmodel.js";

export async function getAllProducts(req, res) {
  try {
    let allProducts = await productModel.getAll();
    res.json({ allProducts });
  } catch (error) {
    res.status(400).send(error.message);
    Users;
  }
}

export async function getallcategories(req, res) {
  try {
    let allCategories = await productModel.getcategories();
    res.json(allCategories);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getProduct(req, res) {
  try {
    let id =parseInt( req.params.id);
    let product = await productModel.getByID(id);
    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getAllProductByCat(req, res) {
  try {
    let category = req.params.categoryId;
    let products = await productModel.getBycategory(category);
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
