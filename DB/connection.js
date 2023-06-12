import mongoose from 'mongoose';

const connectDB=async()=>{
return await mongoose.connect(process.env.LOCAL_DB)
.then(res=>{
    console.log("Connect DB")
}).catch(err=>{
    console.log(`Connecting Error : ${err}`);
})
}
export default connectDB;