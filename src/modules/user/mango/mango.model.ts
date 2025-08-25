import { model, Schema } from "mongoose";
import { Imango } from "./mango.interface";

// name:string;
//     varity: string;
//     unit: "KG" |"TON";
//     price: string;
//     stock: string;
//     origin: string;
//     season: "summer" | "winter";
// }
const mangoSchema = new Schema<Imango>(
    {
    name: {type: String ,trim: true, required: true, },
    varity: {type: String ,trim: true, required: true, },
    unit: {type: String , required: true, enum: {
        values: ["KG","TON"],
        message: `{VALUE} is not supported`
    }, default: "KG" },
    price: {type: Number , required: true, min: 0 },
    stock: {type: Number , min: 0 },
    origin: {type: String },
    season: {type: String , required: true, enum: {
        values: ["summer","winter"],
        message: `{VALUE} is not supported`
    }, default: "summer" },


    },
    {
        timestamps: true
    }
)

const Mango = model<Imango>("Mango", mangoSchema);