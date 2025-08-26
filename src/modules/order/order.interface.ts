import { Model, Types } from "mongoose";

export interface IOrder {
    user: Types.ObjectId,
    mango: Types.ObjectId,
    quantity: number,
    totalPrice: number,
    status: string,
    address: {
        zipcode: string;
        street: string;
        state: string;
        country: string;
    }
}

export interface OrderMethod{
    checkStock(id: string): Promise<any>
}

export interface IOrderModel extends Model<IOrder,{}, OrderMethod> {

}