import { Router } from "express";
import { getUser, registerUser } from "./user.controller";

const userRoute = Router();
const getUserRoute = Router();

userRoute.post("/user", registerUser)
getUserRoute.get("/user", getUser)

export default userRoute;
