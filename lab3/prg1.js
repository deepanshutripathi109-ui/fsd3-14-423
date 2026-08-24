import { log } from "console";
import http from "http"

const server = http.createServer((req,res)=>{
    console.log("welcome to node.js")
    console.log(req.url);
    console.log("Request Method:");
    console.log(req.method);
    
    console.log("Request Header");
    console.log(req.headers);
    console.log("Socket Info : ");
    // console.log(req.socket);
    console.log(req.headers.host);
    
    
    
    
    
    res.end("hello")
})

const port = 4444
server.listen(port,()=>console.log("Server is Running...."))