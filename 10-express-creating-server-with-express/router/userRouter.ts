import  express  from "express";

const userRouter:express.Router=express.Router();

//logic
userRouter.get('/',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to user router</h1>`)
})
userRouter.get('/test',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to api user test router</h1>`)
})

export default userRouter;