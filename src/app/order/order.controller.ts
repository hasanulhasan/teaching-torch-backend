import { NextFunction, Request, Response } from "express";
import { createOrderToDB, deleteOrder, getOrder, getOrders, updateOrder } from "./order.service";
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
  const orders = await getOrders();
  res.status(200).json(
    {
      status: 'success',
      data: orders
    }
  )
  console.log(`${orders.length} Orders found`)
}

export const getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const order = await getOrder(id);
  res.status(200).json(
    {
      status: 'success',
      data: order
    }
  )
  console.log(`order fetched`)
}

export const deleteSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const order = await deleteOrder(id);
  res.status(200).json(
    {
      status: 'success',
      data: order
    }
  )
  console.log('order deleted')
}

export const updateSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const order = await updateOrder(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: order
    }
  )
  console.log('order updated')
}