import http, {Server, IncomingMessage, ServerResponse } from 'http';

const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','application/json');
try{
    if(request.url==='/user' && request.method==='POST'){

        let body:any='';
        request.on('data',(chuck)=>{
            body+=chuck;
        }).on('end',()=>{
            let formData=JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`)
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