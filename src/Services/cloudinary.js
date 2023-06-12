import * as dotenv from 'dotenv';
dotenv.config();
import cloudinary from 'cloudinary';

cloudinary.v2.config({ 
    cloud_name:'dkmcefxh6', 
    api_key:'885798481162546', 
    api_secret:'78Hp62xl9R9ryyZRJJdyyOvdR2o', 
  });
  export default cloudinary.v2;