
import messageModel from './../../../../DB/Models/Message.model.js';
import userModel from './../../../../DB/Models/User.model.js';
import { asyncHandler } from './../../../Services/errorHandling.js';
export const getMessage=(req,res)=>{
    return res.json({Message:"Message"});
   }

export const sendMessage=async(req,res)=>{
    const {message}=req.body;
    const {receiverId}=req.params;
    // res.json({message,receiverId});
    const user= await userModel.findById(receiverId);
    if(!user)
    {
        res.status(404).json({message:"User not found"});
    }
    const createMessage=await messageModel.create({receiverId,message});
    res.json({message:"Success",createMessage});
     
}
export const getMessages=asyncHandler(async(req,res)=>{
    // res.json(req.id);
    const messagesList= await messageModel.find({receiverId:req.id});
     return res.json({message:"Success",messagesList});
})
export const deleteMessage=async(req,res)=>{
const {messageId}= req.params;
const id=req.id;
const message = await messageModel.deleteOne({_id:messageId,receiverId:id});
if(message.deletedCount==0)
{
    return res.status(500).json({message:"Invalid receiver id or message id"});
}
return res.json({message:"Success"});

}


