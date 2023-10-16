import IFeedback from "./feedback.interface";
import { Feedback } from "./feedback.model";

export const createFeedbackToDB = async (payload: IFeedback): Promise<IFeedback>=> {
  const feedback = new Feedback(payload)
  await feedback.save();
  return feedback
}

export const getFeedbacks = async ()=> {
  const feedbacks = await Feedback.find({});
  return feedbacks;
}

export const getFeedback = async (id: string)=> {
  const feedback = await Feedback.findById(id);
  return feedback;
}

export const deleteFeedback = async (id: string)=> {
  const feedback = await Feedback.findByIdAndDelete(id);
  return feedback;
}

export const updateFeedback = async (id: string, payload:Partial<IFeedback>)=> {
  const feedback = await Feedback.findOneAndUpdate({_id: id}, payload, {new:true});
  return feedback;
}