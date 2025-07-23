import "../styles/projectStyles.css"
import dropDown from "../assets/dropDown.png"
import { expandProject,closeProject } from "./taskUI";

const body = document.querySelector("body");

const header = document.querySelector(".header");

const sidebar = document.querySelector(".sidebar");

const links = document.querySelector(".links");

const dashboard = document.querySelector(".dashboard");

const content = document.querySelector(".content");

const buttons = document.querySelector(".buttons");

const projectBar = document.createElement("div");

const title = document.createElement("div");
const date = document.createElement("div");
const expiry = document.createElement("div");
const topbar = document.createElement("div");


function makeProject(Project){

    
    projectBar.classList.toggle("ProjectBar");
    title.classList.toggle("ProjectTitle");
    date.classList.toggle("ProjectDate");
    expiry.classList.toggle("ProjectExpiry");
    topbar.classList.toggle("ProjectTopBar")

    title.textContent=Project.name;
    date.textContent=Project.date;
    expiry.textContent=Project.expiryDate;

    topbar.appendChild(title);
    
    projectBar.appendChild(topbar);
    projectBar.appendChild(date);
    projectBar.appendChild(expiry);

    dashboard.appendChild(projectBar);

    const buttonHolder = document.createElement("div");
    buttonHolder.classList.toggle("buttonHolder");
    topbar.appendChild(buttonHolder); 

    
    const arrowButton = document.createElement("img");
    arrowButton.src = dropDown;
    arrowButton.classList.toggle("arrowButton");
    
    buttonHolder.appendChild(arrowButton);

    buttonHolder.addEventListener("click",()=>{

        projectBar.classList.toggle("Expanded");

        // projectBar.querySelectorAll("*").forEach(element => { 
        //     element.classList.toggle("Expanded")
        // });

        if(projectBar.classList.contains("Expanded")){
            expandProject(Project,projectBar);
        }else{
            closeProject(projectBar);
        }

    })

    
}

   const addProject = document.createElement("div");
    addProject.classList.toggle("addProject");
    addProject.textContent = "Add Project";


function homeOptions(){
 
    buttons.appendChild(addProject);

}




export {body,header,sidebar,links,dashboard,content,addProject,makeProject,homeOptions}; 