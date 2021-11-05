const projectContent = document.querySelectorAll (".project-content");
const newProjectForm = document.querySelector (".new-project-form");
const addNewProjectBtn = document.querySelector(".project .btn");
const addProjectFormBtn =document.querySelector(".new-project-form .btn");
const addContentBtn =document.querySelector(".add-content");
const addContentForm =document.querySelector(".new-project-content-form");
const addContentFormBtn =document.querySelector(".addContentFormBtn");
const deleteProjectBtn =document.querySelectorAll(".project-content .close i");
const deleteProjectForm =document.querySelector(".close-project-form");
const cancelDeleteProjectBtn =document.querySelector(".close-project-form .cancel");
projectContent.forEach ((s)=>{
    s.addEventListener("click",function () {
        projectContent.forEach((s)=>s.classList.remove("active"));
        this.classList.add("active");
        window.location.pathname=(`/id/${this.getAttribute("id")}`);
        window.localStorage.currentProjectId =this.getAttribute("id") ;
    });
});
if (projectContent.length !==0 ) {
    let active = document.getElementById(window.localStorage.currentProjectId);
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
        window.localStorage.deleteFormstatus="open";
    });
}
if (window.localStorage.deleteFormstatus==="open") {
    window.localStorage.deleteFormstatus="close";
    deleteProjectForm.classList.add("active");
}
// cancel deleting the project
cancelDeleteProjectBtn.addEventListener("click",function () {
    window.localStorage.deleteFormstatus="close";
    deleteProjectForm.classList.remove("active");
});
// add content
addContentBtn.addEventListener("click",function () {
    addContentForm.classList.add("active");
});
addContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});