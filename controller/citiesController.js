import city from '../model/cities.js'
const citiesController= {
getAllCities: async (req, res, next)=>{
    res.json({
        response: "cities",
        success: true,
        error: null
    })
},

createCity: async (req, res, next)=>{
cities.create()
}

}
export default citiesController