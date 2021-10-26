const express = require("express");
const app = express();
const https =require("https");
const request =require("request");
const bodyParser =require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get ("/",function(req,res) {
    res.sendFile(__dirname + "/sign-up.html")
})
app.post("/",function(req,res) {
    let firstName =req.body.FirstName;
    let lastName =req.body.lastName;
    let email=req.body.email;
    console.log(firstName,lastName,email);
})
app.listen(3000, function() {
    console.log("running");
})