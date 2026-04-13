import mongoose from "mongoose";

import validator from "validator";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3

    },
    email:{
        type:String,
        required:true,
        unique:true,
       validator:{
        validator:validator.isEmail,
        message:"Please enter a valid email"

       }
        

    },
    password:{
        type:String,
        required:true,
        minLength:6,
        validator:{
            validator:function(value){
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
            },
            message:"Password must be at least 6 characters long and contain at least one letter and one number"
        }
    },
    role:{
        type:String,
        enum:["Patient","Doctor"],
        required:true
    },
    specialization: {
    type: String,
    default: ""
  },

  experience: {
    type: Number,
    default: 0
  }


},{timestamps:true});
const User=mongoose.model("User",userSchema);
export default User;