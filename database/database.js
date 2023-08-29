import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mytinerary:1234@cluster0.2hdhol0.mongodb.net/MYTINERARY-BACK").then(()=>{console.log('database conected')}).catch((err)=>{console.log('database connection fail ' + err)})