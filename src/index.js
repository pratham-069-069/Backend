import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express"
import connectDB from "./db/index.js";


connectDB();

// use of iffy function
/*
const app = express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERR: ",error);
            throw error;
        })

        app.listen(`${process.env.PORT}`,()=>{
            console.log(`App is listeining on the port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
        
    }
})()
    */