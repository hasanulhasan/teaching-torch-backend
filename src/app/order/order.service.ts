import IOrder from "./order.interface";
import { Order } from "./order.model";

export const createOrderToDB = async (payload: IOrder): Promise<IOrder>=> {
  const order = new Order(payload)
  await order.save();
  return order
}

export const getOrderedProduct = async ()=> {
  const orders = await Order.find({});
  return orders;
}