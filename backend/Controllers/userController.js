
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";

import User from "../Models/user.js";

export const register=async(req,res)=>{
    try{
        const data=req.body;
        const hasedpassword=await bycrypt.hash(data.password,10);
        data.password=hasedpassword;
        const user=req.user;
        
        const createUser=await user.create(data);
        return res.json({
            success:true,
            Message:"User Registered Successfully",
            user:createUser
        })
        


    }catch(error){
        return res.json({
            success:false,
            Message:error.Message
        })  
    }
    
}
export const login=async(req,res)=>{
    try{
        const data=req.body;
        const user=req.user;
        const finduser=await User.findOne({email:data.email});
        if(!finduser){
            return res.json({
                success:false,
                Message:"User not found"
            })
        }
        const token=jwt.sign({id:finduser._id},process.env.JWT_SECRET);
        return res.json({
            success:true,
            Message:"User Logged in Successfully",
            user:finduser,
            token
        })
        const isMatch=await bycrypt.compare(data.password,finduser.password);
        if(!isMatch){
            return res.json({
                success:false,
                Message:"Invalid Password"
            })
        }

    }catch(error){
        return res.json({
            success:false,
            Message:error.Message
        })
    }
}
