import city from '../model/cities.js'

const citiesController= {
getAllCities: async (req, res, next)=>{
    const allCities = await city.find()
    console.log(allCities)
    res.json({
        response: allCities,
        success: true,
        error: null
    })
},
getCity: async (req, res, next)=>{
    const { id } = req.params
    const { name } = req.body
    const getCity = await city.findById(id)
    console.log(getCity)
    res.json({
        response: getCity,
        success: true,
        error: null
    })
},

createCity: async (req, res, next)=>{
    const { id } = req.params
    const { name } = req.body
    try {
        req.body
        console.log(req.body)
      const newCity = await city.create(req.body)
   
    res.json({
        response: newCity,
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
updateCity: async (req, res, next)=>{
    const { id } = req.params
   
    try {
        req.body
        console.log(req.body)
      const updateCity = await city.findOneAndUpdate({_id: id}, req.body, {new:true})
   
    res.json({
        response: updateCity,
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
deleteCity: async (req, res, next)=>{
    const { id } = req.params
    
    try {
        req.body
        console.log(req.body)
      const deleteCity = await city.findOneAndDelete({_id:id})
   
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
export default citiesController