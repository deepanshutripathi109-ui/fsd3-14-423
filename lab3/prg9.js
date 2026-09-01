import http from 'http'
import { createReadStream } from 'fs';
 const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        const stream =createReadStream('./pages/airtag.html',{encoding:"utf-8",});
        stream.pipe(res);
    }else if(req.url==="/mobile"){
        res.writeHead(200,{"content-type" : "text/json"});
        const stream = createReadStream('./data/product.json',{encoding:"utf-8"});
        stream.pipe(res);
    }else if(req.url==='/manual'){
        const stream = createReadStream('./data/chatgpt.txt',{endcoding:"utf-8"})
        stream.pipe(res);
    }

    else{
        res.status=404;
        res.end("Not found")
    }
    
 })


 server.listen(3000,()=>console.log("prg9 is running at 3000...")
 )