import  express  from "express";

const userRouter:express.Router=express.Router();


/* 
@usage:test
@url :http://127.0.0.1:5000/users/
@method:get
@field: no fields
@access:public

*/
//logic
userRouter.get('/',(request:express.Request,response:express.Response)=>{
response.status(200).send(`<h1>wecome to USER router</h1>`);
})
/* 
@usage: to check the form data
@url :http://127.0.0.1:5000/users/login
@method:post
@field: name ,password
@access:public

*/

//form data post
userRouter.post('/login',(request:express.Request,response:express.Response)=>{
    let formData =request.body;// to receive the form data from clien
    response.status(200).json(
        {
        msg:'form data is received',
        formData:formData
    });
})

export default userRouter;