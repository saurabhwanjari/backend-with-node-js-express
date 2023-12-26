import http, {Server, IncomingMessage, ServerResponse } from 'http';

const hostname:string='127.0.0.1';
const port:number=5000;

const server:Server =http.createServer((request:IncomingMessage,response:ServerResponse)=>{

    response.statusCode =200;
    response.setHeader('Content-Type','text/html');

    //routing
    let url:string |undefined=request.url;
    let method:string|undefined =request.method;

    let result:string ='';

    if(url ==='/' && method==='GET'){
        result =`<h3>welcome to node js</h3>`;
    }
    else if(url ==='/about' && method==='GET'){
        result =`<h3>welcome About page</h3>`;
    }
    else if(url ==='/service' && method==='GET'){
        result =`<h3>welcome service page</h3>`;
    }
    else if(url ==='/contact' && method==='GET'){
        result =`<h3>welcome contact page</h3>`;
    }
 else{
        result =`<h3>!!page not founf</h3>`;
    }



    response.end(`${result}`);

});

server.listen(port,hostname,()=>{
console.log(`node is started ad http://${hostname}:${port}`);

});