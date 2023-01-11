import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { sample_foods, sample_Tags, sample_users } from "./data";
import foodRouter from './router/food.router';
import userRouter from "./router/user.router";
import {connectDB} from './configs/database.config';

dotenv.config();


const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.use('/api/foods',foodRouter);

app.use('/api/users',userRouter);



const port=3200;
app.listen(port,()=>{
    console.log("Website served on http://localhost:"+port);
    connectDB();
})