const express = require ("express");
const app =express() ;
app.get("/",function(req,res) {
    res.send("<h1>This is the main page</h1>");
});
app.get("/contact",function(req,res) {
    res.send("<h1>This is the contact page 3</h1>");
});
app.listen(3000,function(){
    console.log("running"); 
})