import { Schema, model } from "mongoose";
import IFeedback from "./feedback.interface";

export const ProductSchema = new Schema<IFeedback>({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String, required: true }
});

export const Feedback = model<IFeedback>('Feedback', ProductSchema);
