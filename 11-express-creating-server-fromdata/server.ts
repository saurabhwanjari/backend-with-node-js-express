import  express, { response }  from "express";
import userRouter from "./router/userRouter";

const app:express.Application = express();

const hostname :string ='127.0.0.1';
const port:number =5000;

//configure express to receive form data

app.use(express.json());
// app.use(express.urlencoded({extended:false}));  optional

app.get('/',(request:express.Request,response:express.Response)=>{
    response.status(200).send(`<h1>welcome to express</h1>`);
});


//router config

app.use('/users',userRouter);

app.listen(port,hostname,()=>{
    console.log(`express server started at http://${hostname}:${port}`)
})