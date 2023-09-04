const itynerarySchema= mongoose.Schema({
    "name":{type: String, require:true},
    "country":{type: String, require:true},
    "img":{type: String, require:true},
    "description":{type: String, require:true},
    "localitation":{type: String, require:true},
    "score":{type: Number, require:true}

},{
    //opcion object
    timestamps:true
})
const itynerary= mongoose.model('itynerary', itynerarySchema)


export default itynerary