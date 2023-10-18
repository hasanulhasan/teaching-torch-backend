import { NextFunction, Request, Response } from "express";
import { createUserToDB, deleteUser, getUser, getUsers, updateUser } from "./user.service";

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
export const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  const users = await getUsers();
  res.status(200).json(
    {
      status: 'success',
      data: users
    }
  )
  console.log(`users fetched`)
}

export const deleteSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await deleteUser(id);
  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )
  console.log('user deleted')
}

export const updateSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedData = req.body;
  const user = await updateUser(id,updatedData);
  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )
  console.log('user updated')
}