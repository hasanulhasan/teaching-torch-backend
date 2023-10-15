import { NextFunction, Request, Response } from "express";
import { getProduct, getProducts } from "./product.service";

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getProducts();
  res.status(200).json(
    {
      status: 'success',
      data: products
    }
  )
  console.log(`${products.length} products fetched`)
}

export const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const product = await getProduct(id);
  res.status(200).json(
    {
      status: 'success',
      data: product
    }
  )
  console.log(`product fetched`)
}