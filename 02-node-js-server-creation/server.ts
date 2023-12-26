import http, {Server, IncomingMessage, ServerResponse } from 'http';

const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');
    response.end(`<h3>welcome to trial server of node</h>`);

});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});