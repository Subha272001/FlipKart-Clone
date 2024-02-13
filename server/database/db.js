 import mongoose from 'mongoose';
 import dotenv from 'dotenv';

 dotenv.config();

 const USERNAME=process.env.DB_USERNAME;
 const PASSWORD=process.env.DB_PASSWORD;

const Connection  = async()=>{
  const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-9gvrofc-shard-00-00.4z750jv.mongodb.net:27017,ac-9gvrofc-shard-00-01.4z750jv.mongodb.net:27017,ac-9gvrofc-shard-00-02.4z750jv.mongodb.net:27017/?ssl=true&replicaSet=atlas-st8hm1-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
      await mongoose.connect(URL);
      console.log("Successfully Connected");
  }catch(error){
    console.log('Error while connecting with the database',error.message);
  }
}
 export default Connection;
