import { Router } from "express";
import userRoute from "../user/user.router";
import mangoRoute from "../mango/mango.route";
import orderRoute from "../order/order.route";

const routers = Router();

routers.use('/user',userRoute);
routers.use('/mango',mangoRoute);
routers.use('/order',orderRoute);

export default routers;