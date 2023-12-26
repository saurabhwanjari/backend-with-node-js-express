import http, {Server, IncomingMessage, ServerResponse } from 'http';

const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');
try{
    if(request.url==='/login' && request.method==='POST'){

        let body:any='';
        request.on('data',(chuck)=>{
            body+=chuck;
        }).on('end',()=>{
            let formData=JSON.parse(body);

            if(formData.name==='saurabh' && formData.password ==='saurabh@123'){
                response.end(`<h3>login is suceessful</h3>`)
            }
            else{
                response.end(`<h3>login is failed</h3>`)
            }
        });
    }

}catch(error){
    console.error(error);
}
    // response.end(`<h3>welcome to trial server of node</h>`);

});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});