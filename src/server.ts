import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import config from "./config"
// import userRoute from "./modules/user/user.router"
import routers from "./modules/routes"

const app =  express()

app.use(cors())
app.use(express.json())
app.use(routers)

app.get("/", (req,res)=>{
    res.json({success: true, message : "Hello mango Server"});
    console.log("HI")
});

app.listen(config.port, ()=>{
    console.log(`Hello Mango server Port : ${config.port};`)
});

async function server(){
    try {
        // await mongoose.connect(config.database_url as string);
        await mongoose.connect(config.database_url!);
        console.log(`Connected to Database;`)
    } catch (error) { 
        console.log("Server Error: ", error)
    }
}

server();