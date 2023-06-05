import mongoose from "mongoose";

export const Connection=async(username,password) =>{
    const URL=`mongodb://${username}:${password}@ac-t0aobdg-shard-00-00.sc2bwco.mongodb.net:27017,ac-t0aobdg-shard-00-01.sc2bwco.mongodb.net:27017,ac-t0aobdg-shard-00-02.sc2bwco.mongodb.net:27017/?ssl=true&replicaSet=atlas-92zovx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database connected successfully!!');
    }
    catch(error)
    {
        console.log('Error while connecting with db', error.message);        
    }
}
export default Connection;
