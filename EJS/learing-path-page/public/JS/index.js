// variables 
let clickedPrjectID ;
let deleteID;
let editProjectID;
// --------------------------------------------------------------------------
// log in 
const loginBtn =document.querySelector (".btn.login");
const cancelLoginBtn =document.querySelector (".btn.cancel-login");
const loginForm =document.querySelector(".loginForm");
const loginMassege =document.querySelector(".login-massege");
loginBtn.addEventListener("click",function () {
    loginForm.classList.add("active");
});
cancelLoginBtn.addEventListener("click",function () {
    loginForm.classList.remove("active");
    loginMassege.textContent="";
});
if (loginMassege.textContent!==""){
    loginForm.classList.add("active");
}
// --------------------------------------------------------------------------
// sign up form  
const signUpBtn =document.querySelector (".btn.signUp");
const cancelsignUpBtn =document.querySelector (".btn.cancel-signUp");
const signUpForm =document.querySelector(".signUpForm");
const signupMassege =document.querySelector(".signup-massege");
signUpBtn.addEventListener("click",function () {
    signUpForm.classList.add("active");
});
cancelsignUpBtn.addEventListener("click",function () {
    signUpForm.classList.remove("active");
    signupMassege.textContent="";
});
if (signupMassege.textContent!==""){
    signUpForm.classList.add("active");
}
// --------------------------------------------------------------------------
// project 
const projectContent = document.querySelectorAll (".project-content");
const projectContentText =document.querySelectorAll (".project-content h2");
// make project active
projectContentText.forEach ((s)=>{
    s.addEventListener("click",function () {
        projectContent.forEach((s)=>s.classList.remove("active"));
        clickedPrjectID = this.dataset.id;
        projectContent[clickedPrjectID].classList.add("active");
        window.location.pathname=(`/id/${clickedPrjectID}`);
        window.localStorage.currentProjectId =clickedPrjectID ;
    });
});
if (projectContent.length !==0 && window.localStorage.currentProjectId<projectContent.length) {
    let active = projectContent[window.localStorage.currentProjectId];
    active.classList.add("active");
}else {
    window.localStorage.currentProjectId=0;
}
// -----------------------------------------------------------------------------
// add project
const addNewProjectBtn = document.querySelector(".project .btn");
const newProjectForm = document.querySelector (".new-project-form");
const addProjectFormBtn =document.querySelector(".new-project-form .add");
const cancelProjectFormBtn =document.querySelector(".new-project-form .cancel");

addNewProjectBtn.addEventListener("click",function () {
    newProjectForm.classList.add("active");
});
addProjectFormBtn.addEventListener("click",function () {
    newProjectForm.classList.remove("active");
});
cancelProjectFormBtn.addEventListener("click",function () {
    newProjectForm.classList.remove("active");
});
// -------------------------------------------------------------------------------
// delete project 
const deleteProjectBtn =document.querySelectorAll(".project-content .close i");
const deleteProjectForm =document.querySelector(".close-project-form");
const deleteProjectFormBtn =document.querySelector(".close-project-form .delete");

for (let i=0;i<deleteProjectBtn.length;i++){
    deleteProjectBtn[i].addEventListener("click",function () {
        deleteID=this.dataset.id;
        window.localStorage.deletedProject=deleteID;
        window.localStorage.deleteFormstatus="open";
        window.location.pathname=(`/toDeleteProject/${deleteID}`);
    });
}
if ( window.localStorage.deleteFormstatus==="open"){
    deleteProjectForm.classList.add("active");
    window.localStorage.deleteFormstatus="close";
}
deleteProjectFormBtn.addEventListener("click",function () {
    deleteProjectForm.classList.remove("active");
    deleteID= window.localStorage.deletedProject;
    window.location.pathname=(`/deletedID/${deleteID}`);
});
// cancel deleting the project
const cancelDeleteProjectBtn =document.querySelector(".close-project-form .cancel");

cancelDeleteProjectBtn.addEventListener("click",function () {
    deleteProjectForm.classList.remove("active");
});
// -----------------------------------------------------------------------------
// edit project 
const editProjectBtn =document.querySelectorAll(".project-content .edit i");
const editProjectForm =document.querySelector(".edit-project-form");
const editProjectFormSavePtn =document.querySelector(".edit-project-form .save");
const editProjectFormCancelPtn =document.querySelector(".edit-project-form .cancel");

for (let i=0;i<editProjectBtn.length;i++){
    editProjectBtn[i].addEventListener("click",function () {
       editProjectID=this.dataset.id;
       window.localStorage.editProjectFormstatus="open";
       window.location.pathname=(`/toEditProject/${editProjectID}`);
   });
}
if ( window.localStorage.editProjectFormstatus==="open"){
   editProjectForm.classList.add("active");
   window.localStorage.editProjectFormstatus="close";
}
editProjectFormSavePtn.addEventListener("click",function () {
   editProjectForm.classList.remove("active");
   window.location.pathname=(`/`);
});
// cancel editing project
editProjectFormCancelPtn.addEventListener("click",function () {
   editProjectForm.classList.remove("active");
});
// -----------------------------------------------------------------------
// add content
const addContentBtn =document.querySelector(".add-content"); 
const addContentForm =document.querySelector(".new-project-content-form");
const addContentFormBtn =document.querySelector(".new-project-content-form .add ");
const cancelAddingContentFormBtn =document.querySelector(".new-project-content-form .cancel");

addContentBtn.addEventListener("click",function () {
    addContentForm.classList.add("active");
});
addContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});
// cancel adding content
cancelAddingContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});
// --------------------------------------------------------------------------
const deleteContentBtn = document.querySelectorAll(".steps .type .type-content .icon .close i");
const deleteContentForm = document.querySelector(".close-content-form");
const deleteProjectContentFormBtn =document.querySelector(".close-content-form .delete");
const cancleDeleteContentFormBtn =document.querySelector(".close-content-form .cancel");

// delete content 
deleteContentBtn.forEach((btn)=>{
    btn.addEventListener("click",function () {
        let deleteContentID = this.dataset.id;
        window.localStorage.deleteContentFormstatus="open";
        window.location.pathname=(`/deletedcontentID/${deleteContentID}`);
    });
});
if (window.localStorage.deleteContentFormstatus==="open"){
    deleteContentForm.classList.add("active");
    window.localStorage.deleteContentFormstatus="close";
}
deleteProjectContentFormBtn.addEventListener("click",function () {
    deleteContentForm.classList.remove("active");
    window.location.pathname=(`/`);
});
// cancel deleting the content
cancleDeleteContentFormBtn.addEventListener("click",function () {
    deleteContentForm.classList.remove("active");
});
// ----------------------------------------------------------------------------
// edit project content 
const editContentBtn =document.querySelectorAll(".steps .type .type-content .icon .edit i");
const editProjectContentForm =document.querySelector(".edit-project-content-form");
const saveEditProjectContemt =document.querySelector(".edit-project-content-form .add");
const cancelEditProjectContent =document.querySelector(".edit-project-content-form .cancel");

editContentBtn.forEach((btn)=>{
    btn.addEventListener("click",function () {
        let editContentID = this.dataset.id;
        window.localStorage.editContentFormstatus="open";
        window.location.pathname=(`/editedcontentID/${editContentID}`);
    });
});
if (window.localStorage.editContentFormstatus==="open"){
    editProjectContentForm.classList.add("active");
    window.localStorage.editContentFormstatus="close";
}
if (saveEditProjectContemt){
    saveEditProjectContemt.addEventListener("click",function () {
        editProjectContentForm.classList.remove("active");
        window.location.pathname=(`/`);
    });
}
// cancel editting content 
if (cancelEditProjectContent){
    cancelEditProjectContent.addEventListener("click",function () {
        editProjectContentForm.classList.remove("active");
    });
}
// --------------------------------------------------------------------------
// changeing content status
const contentStatus =document.querySelectorAll(".steps .type .type-content .text .status");

contentStatus.forEach((btn)=>{
    btn.addEventListener("click",function () {
        let chengeContentStatusID = this.dataset.id;
        window.location.pathname=(`/chengeContentStatusID/${chengeContentStatusID}`);
    });
});
