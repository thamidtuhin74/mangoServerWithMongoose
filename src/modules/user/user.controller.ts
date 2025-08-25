import { request, Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req: Request, res: Response) =>{
    const payload =  req.body;
    const user = new User(payload);

    const data =  await user.save();

    res.json({
        success: true,
        message: "User Registration Successfully",
        data,
    })
}
const getUser =  async (req: Request, res: Response) =>{
    // const payload =  req.query;
    const data = await User.find();

    res.send({
        seccess : true,
        message: "All User there",
        data
    })
}

export {registerUser, getUser}