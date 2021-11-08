// project 
const projectContent = document.querySelectorAll (".project-content");
const projectContentText =document.querySelectorAll (".project-content h2");
// project Btn
const addNewProjectBtn = document.querySelector(".project .btn");
const deleteProjectBtn =document.querySelectorAll(".project-content .close i");
const editProjectBtn =document.querySelectorAll(".project-content .edit i");
// add project form 
const newProjectForm = document.querySelector (".new-project-form");
const addProjectFormBtn =document.querySelector(".new-project-form .add");
const cancelProjectFormBtn =document.querySelector(".new-project-form .cancel");
// delete project from
const deleteProjectForm =document.querySelector(".close-project-form");
const cancelDeleteProjectBtn =document.querySelector(".close-project-form .cancel");
const deleteProjectFormBtn =document.querySelector(".close-project-form .delete");
// edit project form 
const editProjectForm =document.querySelector(".edit-project-form");
const editProjectFormSavePtn =document.querySelector(".edit-project-form .save");
const editProjectFormCancelPtn =document.querySelector(".edit-project-form .cancel");
// content 
const addContentBtn =document.querySelector(".add-content");
const deleteContentBtn = document.querySelectorAll(".steps .type .type-content .icon .close i");
const editContentBtn =document.querySelectorAll(".steps .type .type-content .icon .edit i");
// add content form
const addContentForm =document.querySelector(".new-project-content-form");
const addContentFormBtn =document.querySelector(".new-project-content-form .add ");
const cancelAddingContentFormBtn =document.querySelector(".new-project-content-form .cancel");
// delete content form 
const deleteContentForm = document.querySelector(".close-content-form");
const deleteProjectContentFormBtn =document.querySelector(".close-content-form .delete");
const cancleDeleteContentFormBtn =document.querySelector(".close-content-form .cancel");
// edit content form 
const editProjectContentForm =document.querySelector(".edit-project-content-form");
const saveEditProjectContemt =document.querySelector(".edit-project-content-form .add");
const cancelEditProjectContemt =document.querySelector(".edit-project-content-form .cancel");
// variables 
let clickedPrjectID ;
let deleteID;
let editProjectID;
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
if (projectContent.length !==0 && window.localStorage.currentProjectId<projectContent.length) {
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
cancelProjectFormBtn.addEventListener("click",function () {
    newProjectForm.classList.remove("active");
});
// delete project 
for (let i=0;i<deleteProjectBtn.length;i++){
    deleteProjectBtn[i].addEventListener("click",function () {
        deleteID=this.dataset.id;
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
    window.location.pathname=(`/deletedID/${deleteID}`);
});
// cancel deleting the project
cancelDeleteProjectBtn.addEventListener("click",function () {
    deleteProjectForm.classList.remove("active");
});
// edit project 
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
// cancel ededing project
editProjectFormCancelPtn.addEventListener("click",function () {
    editProjectForm.classList.remove("active");
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
// cancel adding content
cancelAddingContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});
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
// edit project content 
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
deleteProjectContentFormBtn.addEventListener("click",function () {
    editProjectContentForm.classList.remove("active");
    window.location.pathname=(`/`);
});
// cancel editting content 
cancelEditProjectContemt.addEventListener("click",function () {
    editProjectContentForm.classList.remove("active");
});