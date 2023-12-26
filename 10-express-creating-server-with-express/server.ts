import  express, { response }  from "express";
import apiRouter from "./router/ApiRouter";
import userRouter from "./router/userRouter";

const app:express.Application = express();

const hostname :string ='127.0.0.1';
const port:number =5000;

app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).send(`<h3>Welcoome to express server</h3>`)
})
// http://127.0.0.1:5000/ -->welcome to express server 



//router config
app.use('/api',apiRouter);
// http://127.0.0.1:5000/api/ -->wecome to api router
// http://127.0.0.1:5000/api/test -->wecome to api test router
app.use('/users',userRouter);

app.listen(port,hostname,()=>{
    console.log(`express server started at http://${hostname}:${port}`)
})