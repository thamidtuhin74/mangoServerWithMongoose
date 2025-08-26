import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) =>{
    try {
        const data = await Mango.create(req.body);
        res.send({
            success: true,
            message: "Mango Create sucessfully",
            data
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Error: Mango Creation Failed",
            error
        })
    }
    
}
const getmango =  async (req: Request, res: Response) =>{
    try {
        const data = await Mango.find();
        if(data.length){
            res.send({
                success: true,
                message: "All Mangoes retrive sucessfully",
                data
            });
        }
        else{
            res.send({
                success: true,
                message: "There is no Mangoes in the server",
            });
        }
        
    } catch (error) {
        res.send({
            success: false,
            message: "Error: Mango retrive Failed",
            error
        })
    }
}

const getmangoByID =  async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const data = await Mango.findById(id);
        res.send({
            success: true,
            message: "All Mangoes retrive sucessfully",
            data
        });
        
    } catch (error) {
        res.send({
            success: false,
            message: "Error: Mango retrive by ID Failed",
            error
        })
    }
}

const updateMango =  async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;

        const data = await Mango.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        res.send({
            success: true,
            message: `Mangoes(id = ${id}) updated sucessfully ` ,
            data
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error: Mango Update is Failed",
            error
        })
    }
}
const deleteMango =  async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;

        const data = await Mango.findByIdAndDelete(id);
        res.send({
            success: true,
            message: `Mangoes(id = ${id}) deleted sucessfully ` ,
            data
        });

    } catch (error) {
        res.send({
            success: false,
            message: "Error: Mango delete is Failed",
            error
        })
    }
}

export const mangoController = {
    createMango, getmango, getmangoByID, updateMango, deleteMango
}