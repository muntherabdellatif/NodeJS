//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let cors =require("cors");
let path =require("path");
let expressLayouts =require("express-ejs-layouts");
const _ =require("lodash");

const app = express();

const projects = [
  {
  name :"programming basics",
  date :"2021-07-31",
  content : [ {
    contentType :"video" ,
    contentName :"C++ basics",
    contentLink :"contentLink" ,
    cntentDate :"2021-07-9" 
   } ,
   {
    contentType :"video" ,
    contentName :"C++ OOP",
    contentLink :"contentLink" ,
    cntentDate :"2021-07-20" 
   },
   {
    contentType :"video" ,
    contentName :"C++ data stracture",
    contentLink :"contentLink" ,
    cntentDate :"2021-07-20" 
   }
  ]} ,
  {
    name :"web mern stack basics",
    date :"2021-11-05",
    content : [ {
      contentType :"video" ,
      contentName :"HTML",
      contentLink :"contentLink" ,
      cntentDate :"2021-08-04" 
     } ,
     {
      contentType :"video" ,
      contentName :"CSS",
      contentLink :"contentLink" ,
      cntentDate :"2021-08-19" 
     },
     {
      contentType :"course" ,
      contentName :"Web development bootcamp Udemy",
      contentLink :"contentLink" ,
      cntentDate :"not yet" 
     },
     {
      contentType :"smallPrject" ,
      contentName :"HTML , CSS project 1",
      contentLink :"contentLink" ,
      cntentDate :"2021-08-21" 
     },
     {
      contentType :"smallPrject" ,
      contentName :"HTML , CSS project 2",
      contentLink :"contentLink" ,
      cntentDate :"2021-08-27" 
     },
     {
      contentType :"video" ,
      contentName :"Bootstrap",
      contentLink :"contentLink" ,
      cntentDate :"2021-09-05" 
     }
    ]} 

];
let projectId = 0;
let toDeleteProject =0;
let toEditProject=0;
let toDeleteProjectContent=0;
let toEditProjectContent=0;
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
      toDeleteProject:toDeleteProject ,
      toDeleteProjectContent:toDeleteProjectContent ,
      toEditProject:toEditProject,
      toEditProjectContent:toEditProjectContent,
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
    }else if (req.body.button==="saveProject"){
      projects[toEditProject].name=req.body.project ;
      projects[toEditProject].date=req.body.projectDate ;
      toEditProject=0;
    }else if (req.body.button==="editProjectContent"){
      projects[projectId].content[toEditProjectContent].contentType=req.body.type;
      projects[projectId].content[toEditProjectContent].contentName=req.body.contentName;
      projects[projectId].content[toEditProjectContent].contentLink=req.body.contentLink;
      projects[projectId].content[toEditProjectContent].contentDate=req.body.contentDate;
      toEditProjectContent=0;
      projectId=0;
    }else if (req.body.button==="deleteContent"){
      projects[projectId].content.splice(toDeleteProjectContent,1);
      projectId=0;
    }
    res.redirect("/");
});
app.get(`/id/:postID`,function (req,res) {
  projectId = _.lowerCase( req.params.postID );
  res.redirect("/");
});
// delete project req
app.get(`/deletedID/:postID`,function (req,res) {
  projects.splice(toDeleteProject,1);
  projectId=projects.length-1;
  res.redirect("/");
});
app.get(`/toDeleteProject/:postID`,function (req,res) {
  toDeleteProject = _.lowerCase( req.params.postID );
  res.redirect("/");
});
// edit project
app.get(`/toEditProject/:postID`,function (req,res) {
  toEditProject = _.lowerCase( req.params.postID );
  res.redirect("/");
});
//delete content req
app.get(`/deletedcontentID/:postID`,function (req,res) {
  toDeleteProjectContent = _.lowerCase( req.params.postID );
  res.redirect("/");
});
// edit content 
app.get(`/editedcontentID/:postID`,function (req,res) {
  toEditProjectContent = _.lowerCase( req.params.postID );
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
