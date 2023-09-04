import intynerary from '../model/itynerary.js'

const intyneraryController= {
getAllIntys: async (req, res, next)=>{
    const allinty = await intynerary.find()
    console.log(allinty)
    res.json({
        response: allinty,
        success: true,
        error: null
    })
},
getInty: async (req, res, next)=>{
    const getInty = await intynerary.findbyId(id)
    console.log(getInty)
    res.json({
        response: City,
        success: true,
        error: null
    })
},

createInty: async (req, res, next)=>{
    const { id } = req.params
    const { name } = req.body
    try {
        req.body
        console.log(req.body)
      const newInty = await intynerary.create(req.body)
   
    res.json({
        response: newInty,
        success: true,
        error: null
    })
    } catch (error) {
    console.log(error)
    res.json({
        response: "500",
        success: false,
        error
    })
}
},
updateInty: async (req, res, next)=>{
    const { id } = req.params
   
    try {
        req.body
        console.log(req.body)
      const updateInty = await intynerary.findOneAndUpdate({_id: id}, req.body, {new:true})
   
    res.json({
        response: updateInty,
        success: true,
        error: null
    })
    } catch (error) {
    console.log(error)
    res.json({
        response: "500",
        success: false,
        error
    })
}
},
deleteInty: async (req, res, next)=>{
    const { id } = req.params
    
    try {
        req.body
        console.log(req.body)
      const deleteInty = await intynerary.findOneAndDelete({_id:id})
   
    res.json({
        response: deleteCity,
        success: true,
        error: null
    })
    } catch (error) {
    console.log(error)
    res.json({
        response: "500",
        success: false,
        error
    })
}
},


}
export default intyneraryController