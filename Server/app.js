const http = require("http");
const routing =require("./routing");
const server = http.createServer((req,res)=>{
    routing.routing(req,res);
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running");
})
