import mongoose from "mongoose";
mongoose.connect("URL").then(()=>{console.log('database conected')}).catch(()=>{console.log('database connection fail ')})