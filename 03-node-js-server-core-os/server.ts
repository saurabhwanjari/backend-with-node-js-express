import http, {Server, IncomingMessage, ServerResponse } from 'http';
import os from 'os';


const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');

//os module

let osData = {
    totalMemory:os.totalmem(),
    freeMomory:os.freemem(),
    homedir :os.homedir(),
    computerName :os.hostname()
};
response.end(`<pre>${JSON.stringify(osData)}</pre>`)

    // response.end(`<h1>welcome to trial server of node</h1>`);

});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});