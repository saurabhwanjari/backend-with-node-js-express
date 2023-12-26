import  express, { response }  from "express";

const app:express.Application = express();

const hostname :string ='127.0.0.1';
const port:number =5000;

app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).send(`<h3>Welcoome to express</h3>`)
})

app.listen(port,hostname,()=>{
    console.log(`express server started at http://${hostname}:${port}`)
})