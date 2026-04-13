
import jwt from "jsonwebtoken";
import User from "../Models/user";
export const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        if(!token){ 
            return res.status(401).json({
                Message:"Unauthorized"
            })
        } 
        const tokenData=jwt.verify(token,process.env.JWT_SECRET);
        const userId=tokenData.id;
        const user=await User.findById(userId);
        if(!user){
            return res.status(401).json({
                Message:"Unauthorized"
            })
        }
        req.user=user;
        next();       
            
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            Message:"Internal Server Error"
        })
    }
}
export const doctorMiddleware=(req,res,next)=>{
    if(req.user.role!=="Doctor"){
        return res.status(403).json({
            Message:"Forbidden"
        })
    }
    next();
}   
export const patientMiddleware=(req,res,next)=>{
    if(req.user.role!=="Patient"){
        return res.status(403).json({   
            Message:"Forbidden"
        })
    }   
    next();
}
