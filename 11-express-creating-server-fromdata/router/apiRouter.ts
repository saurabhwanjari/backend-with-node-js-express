import  express  from "express";

const apiRouter:express.Router=express.Router();

//logic
apiRouter.get('/',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to api router</h1>`)
})
apiRouter.get('/test',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to api test router</h1>`)
})

export default apiRouter;