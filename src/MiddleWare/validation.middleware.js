const dataMethods=['body','params','query'];
const validation=(schema)=>{
 return (req,res,next)=>{
  const errorArray=[];
  dataMethods.forEach(key=>{
    //  res.json(key);
    if(schema[key]){
        const validationResult=schema[key].validate(req[key], {abortEarly:false});
        if(validationResult.error){
            errorArray.push(validationResult.error.details);
            // return res.json(validationResult);
        } 

    }
  }) 
  if(errorArray.length > 0 ){
    return res.status(500).json({message:"Validation Error", errorArray});
  } else{
     next();
  }
 }
}

export default validation;