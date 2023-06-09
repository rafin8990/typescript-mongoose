export interface IUser {
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