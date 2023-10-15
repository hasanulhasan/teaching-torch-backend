import { Schema, model } from "mongoose";
import IProduct from "./product.interface";


export const ProductSchema = new Schema<IProduct>({
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
});

export const Product = model<IProduct>('Product', ProductSchema);