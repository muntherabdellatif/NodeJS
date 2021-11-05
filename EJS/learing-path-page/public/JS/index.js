const projectContent = document.querySelectorAll (".project-content");
const newProjectForm = document.querySelector (".new-project-form");
const addNewProjectBtn = document.querySelector(".project .btn");
const addProjectFormBtn =document.querySelector(".new-project-form .btn");
const addContentBtn =document.querySelector(".add-content");
const addContentForm =document.querySelector(".new-project-content-form");
const addContentFormBtn =document.querySelector(".addContentFormBtn");
projectContent.forEach ((s)=>{
    s.addEventListener("click",function () {
        projectContent.forEach((s)=>s.classList.remove("active"));
        this.classList.add("active");
        window.location.pathname=(`/id/${this.getAttribute("id")}`);
    });
});
// add project
addNewProjectBtn.addEventListener("click",function () {
    newProjectForm.classList.add("active");
});
addProjectFormBtn.addEventListener("click",function () {
    newProjectForm.classList.remove("active");
});
// add content
addContentBtn.addEventListener("click",function () {
    addContentForm.classList.add("active");
});
addContentFormBtn.addEventListener("click",function () {
    addContentForm.classList.remove("active");
});