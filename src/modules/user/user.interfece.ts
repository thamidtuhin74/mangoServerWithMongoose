// Name; Phone; Password; Email; role; 
interface IUser {
    name: string;
    phone: string;
    email: string;
    password: string;
    role: "Admin" | "Customer";
}