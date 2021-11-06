// project 
const projectContent = document.querySelectorAll (".project-content");
const projectContentText =document.querySelectorAll (".project-content h2");
// project Btn
const addNewProjectBtn = document.querySelector(".project .btn");
const deleteProjectBtn =document.querySelectorAll(".project-content .close i");
// add project form 
const newProjectForm = document.querySelector (".new-project-form");
const addProjectFormBtn =document.querySelector(".new-project-form .btn");
// delete project from
const deleteProjectForm =document.querySelector(".close-project-form");
const cancelDeleteProjectBtn =document.querySelector(".close-project-form .cancel");
const deleteProjectFormBtn =document.querySelector(".close-project-form .delete");
// content 
const addContentBtn =document.querySelector(".add-content");
const deleteContentBtn = document.querySelectorAll(".steps .type .type-content .icon .close i");
// add content form
const addContentForm =document.querySelector(".new-project-content-form");
const addContentFormBtn =document.querySelector(".addContentFormBtn");
// delete content form 
const deleteContentForm = document.querySelector(".close-content-form");
// variables 
let clickedPrjectID ;
let deleteID;
// make project active
projectContentText.forEach ((s)=>{
    s.addEventListener("click",function () {
        projectContent.forEach((s)=>s.classList.remove("active"));
        clickedPrjectID = this.dataset.id;
        console.log(clickedPrjectID);
        projectContent[clickedPrjectID].classList.add("active");
        window.location.pathname=(`/id/${clickedPrjectID}`);
        window.localStorage.currentProjectId =clickedPrjectID ;
    });
});
if (projectContent.length !==0 ) {
    let active = projectContent[window.localStorage.currentProjectId];
    active.classList.add("active");
}else {
    window.localStorage.currentProjectId=0;
}
// add project
addNewProjectBtn.addEventListener("click",function () {
    newProjectForm.classList.add("active");
});
addProjectFormBtn.addEventListener("click",function () {
    newProjectForm.classList.remove("active");
});
// delete project 
for (i=0;i<deleteProjectBtn.length;i++){
    deleteProjectBtn[i].addEventListener("click",function () {
        deleteID=this.dataset.id;
        window.localStorage.deleteFormstatus="open";
        window.location.pathname=(`/toDelete/${deleteID}`);
    });
}
if ( window.localStorage.deleteFormstatus==="open"){
    deleteProjectForm.classList.add("active");
    window.localStorage.deleteFormstatus="close";
}
deleteProjectFormBtn.addEventListener("click",function () {
    deleteProjectForm.classList.remove("active");
    window.location.pathname=(`/deletedID/${deleteID}`);
});
// cancel deleting the project
cancelDeleteProjectBtn.addEventListener("click",function () {
    deleteProjectForm.classList.remove("active");
});
// add content
addContentBtn.addEventListener("click",function () {
    addContentForm.classList.add("active");
});
addContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});
// delete content 
deleteContentBtn.forEach((btn)=>{
    this.addEventListener("click",function () {
        deleteContentForm.classList.add("active");
    });
});
// cancel deleting the content