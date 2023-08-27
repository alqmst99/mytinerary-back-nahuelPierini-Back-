import express from "express"
import './database/database.js'
import cors from "cors"
import 'dotenv/config.js'
import indexRouter from "./router/indexRouter.js"
//generate the aplication
const server= express();
//listener server
server.listen(process.env['PORT'], ()=>console.log('service ' + PORT))
server.use('/api', indexRouter.js)
server.listen(3000, ()=>{
    console.log('serverON')
    server.listen(3000, ()=> {
        server.get('/', (req, res, next)=>{
            try {
                res.send('welcome to the server')
            } catch (error) {
                console.log('error conecction')
                
            }
        })
    })
})
