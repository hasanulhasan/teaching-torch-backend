import { Schema, model } from "mongoose";
import IOrder from "./order.interface";


export const bookSchema = new Schema<IOrder>({
  title: { type: String, required: true },
  instructors: [{ type: String }],
  img: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  seat: { type: String, required: true },
  rating: { type: String, required: true },
  status: { type: Boolean, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  reviews: [{ type: String }],
  isPaid: { type: Boolean, required: true },
  userEmail: { type: String, required: true }
});

export const Order = model<IOrder>('Order', bookSchema);