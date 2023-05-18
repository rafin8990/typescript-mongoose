import { IUser } from "./user.interface";
import User from "./user.model";


export const getUserFromDb = async () => {
    const users = await User.find()
    return users
}


export const CreateUserToDB = async (payload: IUser): Promise<IUser> => {
   const user= new User(payload)
   await user.save();
   return user;
}



