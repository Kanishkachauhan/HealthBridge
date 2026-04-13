import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routers/userRouter.js';
dotenv.config();
const server=express();
server.use(express.json());
server.use(cors());
server.use(router);
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to DB");
    server.listen(process.env.port,()=>{
        console.log("Server is running on port");
    })
})
