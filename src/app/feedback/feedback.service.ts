import IFeedback from "./feedback.interface";
import { Feedback } from "./feedback.model";

export const createFeedbackToDB = async (payload: IFeedback): Promise<IFeedback>=> {
  const feedback = new Feedback(payload)
  await feedback.save();
  return feedback
}
