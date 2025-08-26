import { model, Schema } from "mongoose";
import { IOrder, IOrderModel, OrderMethod } from "./order.interface";
import Mango from "../mango/mango.model";
import User from "../user/user.model";


const orderAddress = new Schema({
     zipcode: {type: String, require: true},
     street: {type: String, require: true},
     state: {type: String, require: true},
     country: {type: String, require: true}
})

const orderSchema = new Schema<IOrder, IOrderModel, OrderMethod>({
    user: {type: Schema.Types.ObjectId,ref: "user", required: true},
    mango: {type: Schema.Types.ObjectId, ref:"Mango", required: true},
    quantity: {type: Number, required: true, min: 1},
    totalPrice: {type: Number, min: 0},
    status: {type: String, required: true, default: "newly Ordered"},
    address: {type: orderAddress, required: true}
})

orderSchema.pre("save", async function(){
    // console.log("doc from pree : " + this);

    const mango =  await Mango.findById(this.mango);
    if(!mango) throw new Error("Mango Not found");
    this.totalPrice = this.quantity * mango.price;
    // console.log(this.totalPrice)

});
// orderSchema.post("save", function(doc, next){
//     console.log("Doc from Post", doc);

//     const plainAddress = doc.address.zipcode + " " +doc.address.street +" "+doc.address.state +""+doc.address.country;

//     doc.address = plainAddress;
//     next()
// })

orderSchema.method("checkStock", function(id){
    console.log(id)
})

const Order = model<IOrder, IOrderModel>("orders", orderSchema);

export default Order;