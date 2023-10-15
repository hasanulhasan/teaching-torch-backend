import { Schema, model } from "mongoose";
import IUser from "./user.interface";

export const ProductSchema = new Schema<IUser>({
  email: { type: String, required: true },
  role: { type: String, required: true }
});

export const User = model<IUser>('User', ProductSchema);