import { createFeedbackToDB, deleteFeedback, getFeedback, getFeedbacks, updateFeedback } from "./feedback.service";
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

export const getAllFeedback = async (req: Request, res: Response, next: NextFunction) => {
  const feedbacks = await getFeedbacks();
  res.status(200).json(
    {
      status: 'success',
      data: feedbacks
    }
  )
  console.log(`feedbacks fetched`)
}

export const getSingleFeedback = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const feedback = await getFeedback(id);
  res.status(200).json(
    {
      status: 'success',
      data: feedback
    }
  )
  console.log(`feedback fetched`)
}


export const deleteSingleFeedback = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const feedback = await deleteFeedback(id);
  res.status(200).json(
    {
      status: 'success',
      data: feedback
    }
  )
  console.log('feedback deleted')
}

export const updateSingleFeedback = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const feedback = await updateFeedback(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: feedback
    }
  )
  console.log('feedback updated')
}