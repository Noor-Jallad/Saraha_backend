import userModel from "../../../../DB/Models/User.model.js";
import { generateToken, verifyToken } from "../../../Services/generateAndVerifyToken.js";
import { compare, hash } from './../../../Services/hashAndCompare.js';
import { asyncHandler } from './../../../Services/errorHandling.js';
import { sendEmail } from './../../../Services/sendEmail.js';
export const signup=asyncHandler(async(req,res)=>{
        const {userName,email,password}=req.body;
        console.log(userName,email,password);
        const user= await userModel.findOne({email});
        if(user){
            return res.status(409).json({message:"email already Exists"});
        }
        const hashPassword=hash(password);
        const token= generateToken({email}, process.env.EmailSignature);
        const link=`http://localhost:3000/auth/confirmEmail/${token}`;
        sendEmail(email,"Confirm Email",`<a href="${link}">Verify Your Email</a>`)
        const createUser= await userModel.create({userName,email,password:hashPassword});
        return res.status(201).json({message:"User Created Successfully",user:createUser._id});
    })
    export const login=asyncHandler(async(req,res)=>{
     const {email,password}=req.body;
     const user= await userModel.findOne({email});
     if(!user){
        return res.status(404).json({message:"User Not Found"});
     }
     if(!user.confirmEmail){
      return res.json({message:"Verify your email"});
     }
     const match= compare(password,user.password);
     if(!match){
        return res.json("Invalid Data");
     }
    
     const token= generateToken({id:user._id,loggenIn:true});
     return res.json({message:"done",token});
    //  console.log(email,password);
    })
    export const confirmEmail=async(req,res)=>{
      const {token}= req.params;
      // return res.json({token});
      const decoded= verifyToken(token, process.env.EmailSignature);
      // if(!decoded)
      // return res.json({message:"Invalid Token"});
      const user = await userModel.updateOne({email:decoded.email},{confirmEmail:true});
      return res.json({message:"Your account is confirmed successfully,You can now login"});
      // return res.json({decoded});
      // return res.redirect("https://www.facebook.com");
    }

    export const getAuth=(req,res)=>{
      return res.json({Message:"Auth"});
     }

