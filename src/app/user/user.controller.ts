import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUser } from "./user.service";

export const createUserIntoDB = async (req: Request, res: Response, next: NextFunction)=> {
  const data = req.body;
  const user =await createUserToDB(data);
  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )
  console.log('user created successful')
}

export const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )
  console.log(`user fetched`)
}