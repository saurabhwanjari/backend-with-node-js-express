import http from 'http'
export class ApiRouter{
    public static mapRouter(request:http.IncomingMessage,response:http.ServerResponse){
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
    }
}