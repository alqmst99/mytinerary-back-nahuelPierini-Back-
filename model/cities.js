import {mongoose}  from "mongoose";

//create collections and documents 

const citySchema= mongoose.Schema({
    "city":{type: String, require:true},
    "country":{type: String, require:true},
    "img":{type: String, require:true},
    "description":{type: String, require:true},
    "localitation":{type: String, require:true},
    "score":{type: Number, require:true}

},{
    //opcion object
    timestamps:true
})
const city= mongoose.model('city', citySchema)


export default city