import { IUser } from "./user.interface";
import User from "./user.model";

export const getUserFromDb = async ():Promise<IUser[]> => {
    const users = await User.find()
    return users
}
export const getUserById=async(payload:string):Promise<IUser | null>=>{
    const user=await User.findOne({id:payload},{
        name:1, id:1,presentAddress:1, dateOfBirth:1
    })
    return user;
}

export const CreateUserToDB = async (payload: IUser): Promise<IUser> => {
   const user= new User(payload)  // instance method
   await user.save();
   return user;
}

// now I am insert a data in mongoose . yeyyyyyy.



