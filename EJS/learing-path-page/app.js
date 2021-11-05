//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let cors =require("cors");
let path =require("path");
let expressLayouts =require("express-ejs-layouts");
const _ =require("lodash");

const app = express();

const projects = [];
let projectId = 0;

app.set("views",path.join(__dirname,"views")); // set the file include ejs 
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function (req,res) {
    
  res.render("index",{
      projects :projects ,
      projectId:projectId,
  });   // read ejs file
});

app.post("/",function(req,res){
    if (req.body.button === "addProject"){
      const newProjectName =req.body.project;
      const newProjectDate =req.body.projectDate;
      let newProject ={
          name :newProjectName,
          date :newProjectDate,
          content : [] 
      }
      projects.push(newProject);
      console.log(projects);
    }else if (req.body.button === "addProjectContent"){
      const contentType = req.body.type ;
      const contentName =req.body.contentName ;
      const contentLink =req.body.contentLink ;
      const cntentDate =req.body.contentDate ;
      let newContent = {
        contentType :contentType ,
        contentName :contentName,
        contentLink :contentLink ,
        cntentDate :cntentDate 
      }
      projects[projectId].content.push(newContent);
      console.log(projects);
    }
    res.redirect("/");
});
app.get(`/id/:postID`,function (req,res) {
  projectId = _.lowerCase( req.params.postID );
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
