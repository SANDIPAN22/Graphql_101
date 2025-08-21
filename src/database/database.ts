import mongoose from "mongoose"


export const connectDb = () =>{
    mongoose.connect("mongodb://localhost:27017/graphql").then(()=>{
        console.log("Db connected")
    }).catch((err)=>{
        console.error("Failed to connect the db || ", err)
    })
}