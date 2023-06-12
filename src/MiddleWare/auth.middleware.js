
import { verifyToken } from "../Services/generateAndVerifyToken.js";
export const auth=(req,res,next)=>{
    const {authorization}= req.headers;
    if(!authorization){
        return res.json({message:"authorization is required"});
    }
    else{
        if(!authorization?.startsWith(process.env.bearerToken)){
          return res.json({message:"Invalid Bearer Token"});
        }else{
          const token= authorization.split(process.env.bearerToken)[1];
          if(!token){
            return res.json({message:"Invalid token"});
          }
          const decoded= verifyToken(token);
          req.id=decoded.id;
          next();
        }
    }
}