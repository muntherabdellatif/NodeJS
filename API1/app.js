const express =require ("express");
const https =require("https");
const app =express();
app.get ("/",function(req,res) {
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Jordan,amman&units=metric&appid=fab66145cf271c03c15b1151178a26b9#";
    https.get(url,function(response) {
        response.on("data" , function(data) {
            const weather = JSON.parse(data).weather[0].main;
            const temp = JSON.parse(data).main.temp;
            res.write(`<h1>this is a very simple weather API app </h1>`);
            res.write(`<h2>the weather is ${weather} , and the temp is : ${temp}deg</h2>`);
            res.send();
        })
    })
    // res.send("testing the server")
})
app.listen(3000, function() {
    console.log("running");
})