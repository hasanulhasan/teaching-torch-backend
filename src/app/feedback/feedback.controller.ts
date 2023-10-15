import { createFeedbackToDB } from "./feedback.service";
import { NextFunction, Request, Response } from "express";

export const createFeedbackIntoDB = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const feedback =await createFeedbackToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: feedback
    }
  )
  console.log('feedback created successful')
}