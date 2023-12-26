import  express  from "express";
// import appLogger from "../middlwares/applogger"; to make it work for all import it in server

const apiRouter:express.Router=express.Router();

//logic
// apiRouter.get('/',appLogger,(request:express.Request,response:express.Response)=>{  
//in above we configure applogger only for get request 

apiRouter.get('/',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to api router</h1>`)
})


apiRouter.get('/test',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to api test router</h1>`)
})

export default apiRouter;