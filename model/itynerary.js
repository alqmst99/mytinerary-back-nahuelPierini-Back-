import { mongoose } from "mongoose"

const itynerarySchema= mongoose.Schema({
    "title":{type: String, require:true},
    "author":{type: String, require:true},
    "imgU":{type: String, require:true},
    "city":{type: mongoose.SchemaTypes.ObjectId, ref:'city'},
    "task":{type: String, require:true},
    "duration":{type: String, require:true},
    "like":{type: Number, require:true},
    "price":{type: Number, require:true, Range:(1, 5)}

},{
    //opcion object
    timestamps:true
})
const intynerary= mongoose.model('ityneraries', itynerarySchema)


export default intynerary