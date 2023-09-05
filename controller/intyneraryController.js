import intynerary from '../model/itynerary.js'
import city from '../model/cities.js'
city._id
const intyneraryController = {
    getAllIntys: async (req, res, next) => {
        try {
            const allinty = await intynerary.find().populate({
                path: 'city',
                select: 'city'
            })
            console.log(allinty)
            res.json({
                response: allinty,
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
    getInty: async (req, res, next) => {

        try {
            const { id } = req.params
            const { name } = req.body
            const getInty = await itynerary.findById(id)
            console.log(getInty)
            res.json({
                response: getOneInty,
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

    createInty: async (req, res, next) => {
        const { id } = req.params
        const { name } = req.body
        try {
            const c = await city.findOne({ city : req.body.city})
            const query = {...req.body }
            query.city = c._id
            console.log(req.body)
            const newInty = await intynerary.create(query)

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
    updateInty: async (req, res, next) => {
        const { id } = req.params

        try {
            req.body
            console.log(req.body)
            const updateInty = await intynerary.findOneAndUpdate({ _id: id }, req.body, { new: true })

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
    deleteInty: async (req, res, next) => {
        const { id } = req.params

        try {
            req.body
            console.log(req.body)
            const deleteInty = await intynerary.findOneAndDelete({ _id: id })

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