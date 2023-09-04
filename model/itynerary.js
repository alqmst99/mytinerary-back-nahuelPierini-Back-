import { mongoose, Schema, model } from "mongoose"

const itynerarySchema= mongoose.Schema({
    "title":{type: String, require:true},
    "author":{type: String, require:true},
    "imgU":{type: String, require:true},
    "city":{type: Schema.Types.ObjectId, ref:'city', required: true},
    "task":{type: String, require:true},
    "duration":{type: Number, require:true},
    "like":{type: Number, require:true},
    "Price":{type: Number, require:true, Range:(1, 5)}

},{
    //opcion object
    timestamps:true
})
const itynerary= mongoose.model('ityneraries', itynerarySchema)


export default itynerary