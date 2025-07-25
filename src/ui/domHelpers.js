import "../styles/projectStyles.css"

const body = document.querySelector("body");

const header = document.querySelector(".header");

const sidebar = document.querySelector(".sidebar");

const links = document.querySelector(".links");

const dashboard = document.querySelector(".dashboard");

const content = document.querySelector(".content");

const buttons = document.querySelector(".buttons");

   const addProject = document.createElement("div");
    addProject.classList.toggle("addProject");
    addProject.textContent = "Add Project";

    const removeProject = document.createElement("div");
    removeProject.classList.toggle("removeProject");
    removeProject.textContent = "Remove Project";

    
function homeOptions(){
 
    buttons.appendChild(addProject);
    buttons.appendChild(removeProject);

}




export {body,header,sidebar,links,dashboard,content,addProject,removeProject,homeOptions}; 