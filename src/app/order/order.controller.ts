import { NextFunction, Request, Response } from "express";
import { createOrderToDB, getOrderedProduct } from "./order.service";
export const createOrderInDB = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const order =await createOrderToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: order
    }
  )
  console.log('Order created successful')
}

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  const orders = await getOrderedProduct();
  res.status(200).json(
    {
      status: 'success',
      data: orders
    }
  )
  console.log(`${orders.length} Orders found`)
}