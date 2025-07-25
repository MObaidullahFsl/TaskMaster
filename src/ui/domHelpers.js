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


function homeOptions(){
 
    buttons.appendChild(addProject);

}




export {body,header,sidebar,links,dashboard,content,addProject,homeOptions}; 