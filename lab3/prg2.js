import http from "http"

const server = http.createServer((req,res)=>{
    res.writeHead(404,{
        "content-type": "text/plain",
    })
    res.end("<h1>Welcome to Server</h1>")
    
})

const port = 4445
server.listen(port,()=>console.log("Server is running"))