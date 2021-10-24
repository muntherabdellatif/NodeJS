//jshint esversion:6
const express = require ("express");
const bodyParser =require ("body-parser");
const app =express() ;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    let result =(+(req.body.num1) + +(req.body.num2));
    res.send("result :" + result);
});

app.listen(3000,function(){
    console.log("running"); 
});