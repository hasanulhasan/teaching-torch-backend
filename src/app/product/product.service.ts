import { Product } from "./product.model";

export const getProducts = async ()=> {
  const products = await Product.find({});
  return products;
}

export const getProduct = async (id: string)=> {
  const products = await Product.findById(id);
  return products;
}