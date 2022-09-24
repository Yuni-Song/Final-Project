import {
  verify,
  registerUser,
  getUser,
  createCart,
  addProductInCart,
  findCart,
  deleteProduct,
} from "./Usersmodel.js";
import { getByID } from "../Products/productsmodel.js";
export async function verifyLogin(req, res) {
  try {
    const userInformation = req.body;
    await verify(userInformation);
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function register(req, res) {
  try {
    const userInformation = req.body;
    await registerUser(userInformation);
    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}
export async function getUserInformation(req, res) {
  try {
    const userId = req.params.userId;
    const userInformation = await getUser(userId);
    res.json({ userInformation });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function createUserCart(req, res) {
  try {
    await createCart(req.params.userId);
    res.status(200).send("Cart created");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addProduct(req, res) {
  try {
    const productId = parseInt(req.body.productId);
    const productNumber = parseInt(req.body.productNumber);
    const userId = req.params.userId;
    const product = await getByID(productId);
    const price = product.price;
    await addProductInCart(productId, productNumber, price, userId);
    res.status(200).send("Product added to cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  try {
    const userId = req.params.userId;
    const cart = await findCart(userId);
    res.json({ cart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductFromCart(req, res) {
  try {
    const productId = parseInt(req.params.id);
    const userId = req.params.userId;
    await deleteProduct(productId, userId);
    res.status(200).send("Product deleted from cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
