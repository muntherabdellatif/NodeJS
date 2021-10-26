const express =require ("express");
const https =require("https");
const app =express();
const bodyParser =require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get ("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res) {
    let query = req.body.cityName;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fab66145cf271c03c15b1151178a26b9#`;
    https.get(url,function(response) {
        response.on("data" , function(data) {
            const weather = JSON.parse(data).weather[0].main;
            const temp = JSON.parse(data).main.temp;
            const icon = JSON.parse(data).weather[0].icon;
            const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write(`<h1>this is a very simple weather API app </h1>`);
            res.write(`<h2>the sky in ${query} is ${weather} , and the temp is : ${temp}deg</h2>`);
            res.write(`<img src="${imgURL}" alt="">`);
            res.send();
        })
    })
})

app.listen(3000, function() {
    console.log("running");
})