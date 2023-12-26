import http, {Server, IncomingMessage, ServerResponse } from 'http';
import { StringUtil } from './util/StringUtil';
import { MathUtil } from './util/MathUtil';

const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');

    //lenght of string
    let customerName :string ='saurabh';
    let length:number=StringUtil.printLength(customerName);
    // response.end(`<h3>lenght :${length}</h>`);

    //making triangle of string
    let channelName:string ='saurabh wanjari';
    let result:string=StringUtil.printTriangle(channelName);
    // response.end(`<pre>${result}</pre>`);

    //math util
    let num:number=3;
    let result2 =MathUtil.printMathTable(num);
    response.end(`<pre>${result2}</pre>`);


});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});