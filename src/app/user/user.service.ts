import IUser from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser>=> {
  const user = new User(payload)
  await user.save();
  return user
}

export const getUser = async (id: string)=> {
  const user = await User.findById(id);
  return user;
}

export const getUsers = async ()=> {
  const users = await User.find({});
  return users;
}

export const deleteUser = async (id: string)=> {
  const user = await User.findByIdAndDelete(id);
  return user;
}

export const updateUser = async (id: string, payload:Partial<IUser>)=> {
  const user = await User.findOneAndUpdate({_id: id}, payload, {new:true});
  return user;
}
