import fs from "fs/promises";
const PRODUCTS_FILE = "./data/Products.json";

export async function getAll() {
  try {
    //inbuilt Node function readFile
    let productsTxt = await fs.readFile(PRODUCTS_FILE);
    //string to JSON
    let products = JSON.parse(productsTxt);
    return products;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exitss
      await save([]); // create a new file with empty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

function findProduct(productArray, Id) {
  return productArray.findIndex((currproduct) => currproduct.productId === Id);
}

export async function findcatProduct(productArray, cat) {
  let catprod = [];
  for (let i = 1; i < productArray.length; i++) {
    if (productArray[i].category === cat) catprod.push(productArray[i]);
  }
  return catprod;
}

export async function getByID(productId) {
  let productArray = await getAll();
  let index = findProduct(productArray, productId);
  if (index === -1)
    throw new Error(`product with ID:${productId} doesn't exist`);
  else return productArray[index];
}

export async function getBycategory(cat) {
  let productArray = await getAll();
  let prod = findcatProduct(productArray, cat);
  if (prod === -1)
    throw new Error(`product with ID:${productId} doesn't exist`);
  else return prod;
}

export async function getcategories() {
  let allProducts = await getAll();
  let categories = [];

  for (let i = 1; i < allProducts.length; i++) {
    categories.push(allProducts[i].category);
  }
  let uniqueItems = [...new Set(categories)];

  return uniqueItems;
}

async function save(products = []) {
  let productsTxt = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE, productsTxt);
}

//  let productArray = await getAll();
//  return productArray.map((e) => e.category);

// export async function getByCategory(list, category) {
//   return list.filter((item) => item.category === category);
// }

// //Get all details about a specific product
// export async function getDetails(productId) {
//   let productArray = await getAll();
//   let index = findProduct(productArray, productId);
//   if (index === -1)
//     throw new Error(`product with ID:${productId} doesn't exist`);
//   else return productArray[index];
// }
