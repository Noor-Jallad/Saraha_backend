
import cloudinary from '../../../Services/cloudinary.js';
import userModel from './../../../../DB/Models/User.model.js';
export const getUsers= (req,res)=>{
return res.json({Message:"User"});
}
export const profile= (req,res)=>{
    return res.json({message:"login profile"});
}

export const profilePic=async(req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"File is required"})
    }
    const {secure_url}= cloudinary.uploader.upload(req.file.path,{folder:`saraha/user/${req.id}`});
    // return res.json(cloud);
    const user= await userModel.updateOne({_id:req.id},{profilePic:secure_url});
    return res.status(200).json({message:"User Updated Successfully"});
    // return res.json(req.file);
}