import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB Connected!! DB host is ${connectionInstance}`);
        
    } catch (error) {
        console.log("MONOGODB connection error ", error);
        process.exit(1)
        
    }
}
export default connectDB;
// const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)