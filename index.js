import {express, response, request} from "express";
//generate the aplication
const server= express();

server.listen(3000, ()=>{
    console.log('serverON')
    server.listen(3000, ()=> {
        server.get('/', (req, res, next)=>{
            try {
                response.send('welcome to the server')
            } catch (error) {
                console.log('error conecction')
                
            }
        })
    })
})
