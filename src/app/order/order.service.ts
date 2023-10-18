import IOrder from "./order.interface";
import { Order } from "./order.model";

export const createOrderToDB = async (payload: IOrder): Promise<IOrder>=> {
  const order = new Order(payload)
  await order.save();
  return order
}

export const getOrders = async ()=> {
  const orders = await Order.find({});
  return orders;
}

export const getOrder = async (id: string)=> {
  const order = await Order.findById(id);
  return order;
}

export const deleteOrder = async (id: string)=> {
  const order = await Order.findByIdAndDelete(id);
  return order;
}

export const updateOrder = async (id: string, payload:Partial<IOrder>)=> {
  const order = await Order.findOneAndUpdate({_id: id}, payload, {new:true});
  return order;
}