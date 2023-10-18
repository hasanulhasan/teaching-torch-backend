import { Schema, model } from "mongoose";
import IUser from "./user.interface";

export const ProductSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true }
});

export const User = model<IUser>('User', ProductSchema);