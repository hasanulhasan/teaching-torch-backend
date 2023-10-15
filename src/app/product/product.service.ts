import IProduct from "./product.interface";
import { Product } from "./product.model";

export const createProductToDB = async (payload: IProduct): Promise<IProduct>=> {
  const product = new Product(payload)
  await product.save();
  return product
}

export const getProducts = async ()=> {
  const products = await Product.find({});
  return products;
}

export const getProduct = async (id: string)=> {
  const products = await Product.findById(id);
  return products;
}