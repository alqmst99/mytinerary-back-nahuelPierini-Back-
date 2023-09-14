import express from "express"

import indexRouter from "./router/indexRouter.js"
import './database/database.js'
import cors from "cors"
import 'dotenv/config.js'

//generate the aplication
const server= express();

//CORS and express
var corsOptions = {
    origin: 'http://localhost:5173'
}
server.use(cors(corsOptions))
server.use(express.json({ extended: true }))
server.use(express.urlencoded())

//listener server

server.use('/api', (req, res, next)=>{
    console.log('hicieron una peticion al back a la ruta', req.url, "a la hora: ", new Date().toLocaleDateString() );
    next()
}, indexRouter)

    console.log('serverON')
    server.listen(process.env['PORT'], ()=> {
        server.get('/', (req, res, next)=>{
            try {
                res.send('welcome to the server')
                res.json({
                    process: "andujo",
                    sucess: true,
                    error: null
                })
            } catch (error) {
                console.log('error conecction')
                res.json({
                    process: "no andujo",
                    sucess: false,
                    error
                })
        }
    })
})

