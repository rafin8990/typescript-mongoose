import User from "./user.model";

export const CreateUserToDB = async () => {
    const user = new User({
        id: '99sdghsaDASF',
        role: "student",
        password: 'Rafin019844@',
        name: {
            firstName: 'Mr',
            middleName: 'Test TST TST',
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
    return user;
}