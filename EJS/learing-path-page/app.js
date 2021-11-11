//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let cors =require("cors");
let path =require("path");
let expressLayouts =require("express-ejs-layouts");
const _ =require("lodash");

const app = express();
const users= [
  {
    userName:"" ,
    userPassword:"" ,
    startingDate:"",
    projects : []
  },
  {
    userName:"MAbdellatif" ,
    userPassword:"monther.wind" ,
    startingDate:"20/06/2021",
    projects : [
      {
      name :"programming basics",
      date :"2021-07-31",
      content : [ {
        contentType :"video" ,
        contentName :"C++ basics",
        contentLink :"contentLink" ,
        contentDate :"2021-07-9" ,
        contentStatus : "done"
       } ,
       {
        contentType :"video" ,
        contentName :"C++ OOP",
        contentLink :"contentLink" ,
        contentDate :"2021-07-20" ,
        contentStatus : "done"
       },
       {
        contentType :"video" ,
        contentName :"C++ data stracture",
        contentLink :"contentLink" ,
        contentDate :"2021-07-20" ,
        contentStatus : "done"
       }
      ]} ,
      {
        name :"web mern stack basics",
        date :"2021-11-05",
        content : [ {
          contentType :"video" ,
          contentName :"HTML",
          contentLink :"contentLink" ,
          contentDate :"2021-08-04" ,
          contentStatus : "done"
         } ,
         {
          contentType :"video" ,
          contentName :"CSS",
          contentLink :"contentLink" ,
          contentDate :"2021-08-19" ,
          contentStatus : "done"
         },
         {
          contentType :"course" ,
          contentName :"Web development bootcamp Udemy",
          contentLink :"contentLink" ,
          contentDate :"" ,
          contentStatus : "inProgress" 
         },
         {
          contentType :"smallPrject" ,
          contentName :"HTML , CSS project 1",
          contentLink :"contentLink" ,
          contentDate :"2021-08-21" ,
          contentStatus : "done" 
         },
         {
          contentType :"smallPrject" ,
          contentName :"HTML , CSS project 2",
          contentLink :"contentLink" ,
          contentDate :"2021-08-27" ,
          contentStatus : "done" 
         },
         {
          contentType :"video" ,
          contentName :"Bootstrap",
          contentLink :"contentLink" ,
          contentDate :"2021-09-05" ,
          contentStatus : "done" 
         }
        ]}
    ]
  }
];
let SignUpErrorMassege="";
let loginErrorMassege="";
let userID=0;
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
      startingDate:users[userID].startingDate,
      userName :users[userID].userName,
      projects :users[userID].projects ,
      projectId:projectId,
      toDeleteProject:toDeleteProject ,
      toDeleteProjectContent:toDeleteProjectContent ,
      toEditProject:toEditProject,
      toEditProjectContent:toEditProjectContent,
      loginErrorMassege:loginErrorMassege,
      SignUpErrorMassege:SignUpErrorMassege,
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
    users[userID].projects.push(newProject);
  }else if (req.body.button === "addProjectContent"){
    const contentType = req.body.type ;
    const contentName =req.body.contentName ;
    const contentLink =req.body.contentLink ;
    const contentDate =req.body.contentDate ;
    let newContent = {
      contentType :contentType ,
      contentName :contentName,
      contentLink :contentLink ,
      contentDate :contentDate , 
      contentStatus : "notStarted" 
    }
    users[userID].projects[projectId].content.push(newContent);
  }else if (req.body.button==="saveProject"){
    users[userID].projects[toEditProject].name=req.body.project || users[userID].projects[toEditProject].name;
    users[userID].projects[toEditProject].date=req.body.projectDate  || users[userID].projects[toEditProject].date;
    toEditProject=0;
  }else if (req.body.button==="editProjectContent"){
    users[userID].projects[projectId].content[toEditProjectContent].contentType=req.body.type || users[userID].projects[projectId].content[toEditProjectContent].contentType;
    users[userID].projects[projectId].content[toEditProjectContent].contentName=req.body.contentName || users[userID].projects[projectId].content[toEditProjectContent].contentName;
    users[userID].projects[projectId].content[toEditProjectContent].contentLink=req.body.contentLink || users[userID].projects[projectId].content[toEditProjectContent].contentLink;
    users[userID].projects[projectId].content[toEditProjectContent].contentDate=req.body.contentDate || users[userID].projects[projectId].content[toEditProjectContent].contentDate;
    toEditProjectContent=0;
    projectId=0;
  }else if (req.body.button==="deleteContent"){
    users[userID].projects[projectId].content.splice(toDeleteProjectContent,1);
  }else if (req.body.button === "login"){
    const loginUserName = req.body.userName ;
    const loginPassword = req.body.password ;
    for (let i=0;i<users.length;i++){
      if (users[i].userName===loginUserName){
        if (users[i].userPassword===loginPassword){
          userID=i;
          loginErrorMassege="";
        }
      }
    }
    if (userID===0){
      loginErrorMassege="the password or user name is wrong!";
    }
  }else if (req.body.button === "signUp"){
    const loginUserName = req.body.userName ;
    const loginPassword = req.body.password ;
    const Confirmpassword = req.body.Confirmpassword ;
    if (loginPassword===Confirmpassword){
      let today =new Date();
      let dayInMonth =today.getDate();
      let month =today.getMonth();
      let year =today.getFullYear();
      let todayDate= `${dayInMonth}/${month+1}/${year}`;
      let newuser={
        userName: loginUserName ,
        userPassword: loginPassword ,
        startingDate: todayDate,
        projects : []
      };
      users.push(newuser);
      userID=users.length-1;
      SignUpErrorMassege="";
    }else {
      SignUpErrorMassege="the passwords not match!";
    }
  }else if (req.body.button === "cancelLogin" || req.body.button === "cancelSignUp") {
    SignUpErrorMassege="";
    loginErrorMassege="";
  }
  res.redirect("/");
});
app.get("/signout",function(req,res){
  userID=0;
  res.redirect("/");
});
app.get(`/id/:postID`,function (req,res) {
  projectId = _.lowerCase( req.params.postID );
  res.redirect("/");
});
// delete project req
app.get(`/deletedID/:postID`,function (req,res) {
  users[userID].projects.splice(toDeleteProject,1);
  projectId=users[userID].projects.length-1;
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
// change content status  
app.get(`/chengeContentStatusID/:postID`,function (req,res) {
  let tochange = _.lowerCase( req.params.postID );
  if (users[userID].projects[projectId].content[tochange].contentStatus==="notStarted"){
    users[userID].projects[projectId].content[tochange].contentStatus="inProgress";
  }else if (users[userID].projects[projectId].content[tochange].contentStatus==="inProgress"){
    users[userID].projects[projectId].content[tochange].contentStatus="done";
  }else if (users[userID].projects[projectId].content[tochange].contentStatus==="done"){
    users[userID].projects[projectId].content[tochange].contentStatus="notStarted";
  }
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});