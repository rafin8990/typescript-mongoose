import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    /* res.send('Hello World!')
    next(); */

    // insert text data into mongodb

    /**
     * step one: Interface
     *  Step Two : Schema;
     * Step Three: Model;
     * Step Four: Database Query;
     */
    // createing a interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        },
        dateOfBirth?: string;
        gender: "male" | "female";
        contact: string;
        email?: string;
        emmergencyContact: string;
        presentAddress: string;
        permanentAddress: string;
    };

    //creating Schema
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,

            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        contact: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        emmergencyContact: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    });

    // create model 

    const User = model<IUser>('User', userSchema);

    const CreateUserToDB = async () => {
        const user = new User({
            id: '55sdghkl',
            role: "student",
            password: 'Rafin019844@',
            name: {
                firstName: 'Mr',
                middleName: 'Kuddus',
                lastName: 'Hossain'
            },
            dateOfBirth: '01/01/2000',
            gender: "male",
            contact: '01984419614',
            email: 'abc@gmail.com',
            emmergencyContact: "5775346764322 ",
            presentAddress: "Dhaka Bangladesh",
            permanentAddress: "Dhaka Bangladesh"
        });
        await user.save();
        console.log(user);
    }

    CreateUserToDB()

})

export default app;