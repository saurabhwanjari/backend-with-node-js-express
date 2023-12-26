import http, {Server, IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path, { dirname } from 'path';


const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');

//fs module
// fs.readFile(path,encoding,callback);
//reading file
fs.readFile(path.join(__dirname,'data','notes.txt'),'utf-8',(error,result)=>{

if(error)
console.log(error);
else
// response.end(`<p>${result}</p>`);

//writing into file
fs.writeFile(path.join(__dirname,'data','new.txt'),result,'utf-8',(error)=>{
if(error)
console.log(error)
else
response.end(`<h1>Data is Written into file</h1>`);
});



});



    // response.end(`<h1>welcome to trial server of node</h1>`);

});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});