import {Schema,model,Types} from 'mongoose';
import { mongoose } from 'mongoose';

const messageSchema= new Schema({
 message:{
    type:String,
    required:true
 },
 receiverId:{
    type:Types.ObjectId,
    required:true
 }

},{
    timestamps:true
})

const messageModel= mongoose.models.Message || model('Message',messageSchema);

export default messageModel;