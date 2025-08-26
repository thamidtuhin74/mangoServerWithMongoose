import { Request, Response } from "express";
import Order from "./order.model";


const createOrder =  async (req: Request, res: Response) =>{
    
  


    try {
        const order = await Order.create(req.body);

        res.send({
            success: true,
            message: "Order created Successfully",
            order
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Order creation failed",
            error
        })
    }
};
const getOrder = async (req: Request, res: Response) =>{
    const orders = await Order.find().populate("user").populate("mango");

    try {
        res.send({
            success: true,
            message: "Order retrived Successfully",
            orders
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Order retrives failed",
            error
        })
    }
}


export const orderController = {
    createOrder, getOrder
}