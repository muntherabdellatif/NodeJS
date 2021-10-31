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
    const firstName =req.body.FirstName;
    const lastName =req.body.lastName;
    const email=req.body.email;
    // console.log(firstName,lastName,email);
    const data = {
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    }
    const ListID = "ccc99a8c0f";
    const APIKey =" ad9e84668cf21b4c1e91059e6c421ab3-us5";
    const jasonData = JSON.stringify(data);
    const url =`https:us5.api.mailchimp.com/3.0/lists/${ListID}`;
    const options={
        method:"POST",
        auth:`Monther:${APIKey}`
    }
    const request=https.request(url,options,function(responce){
        responce.on("data",function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jasonData);
    request.end();
})
app.listen(process.env.PORT || 3000, function() {
    console.log("running");
})

