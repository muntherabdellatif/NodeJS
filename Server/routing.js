const fs =require("fs");
const url=require("url");
function routing(req,res) {
    const path =url.parse(req.url).pathname;
    switch(path) {
        case("/") :
            handelrequest("index.html",res);
            break;
        case("/any") :
            handelrequest("any.html",res);
            break;
        case("/user") :
            handelrequest("user.html",res);
            break;
        default :
            res.end("error :this page not found");
            break;
    }
}
function handelrequest(filepath,res) {
    fs.readFile(filepath,null,(error,data)=>{
     if (error){
         res.end("error in file");
     }else{
         res.end(data);
     }
 })
}
module.exports= {
    handelrequest :handelrequest ,
    routing :routing 
}