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

createCity: async (req, res, next)=>{

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
}

}
export default citiesController