import {body,header,sidebar,links,dashboard,content} from "./domHelpers"
import dropDown from "../assets/dropDown.png"
import addImage from "../assets/add.png"
import { makeTasks } from "./taskUI";
import { taskModal } from "./createTask";
import { TMbody } from "./createTask";
import app from "../index"
import { makeUI } from "./appUI";

function makeProject(Project){
    
    const projectBar = document.createElement("div");    
    const title = document.createElement("div");
    const date = document.createElement("div");
    const expiry = document.createElement("div");
    const topbar = document.createElement("div");
    const tasksArea = document.createElement("div");

    const addBox = document.createElement("img");
    
    addBox.classList.add("addImage");
    addBox.src = addImage;

    projectBar.innerHTML="";
  
    projectBar.classList.toggle("ProjectBar");
    title.classList.toggle("ProjectTitle");
    date.classList.toggle("ProjectDate");
    expiry.classList.toggle("ProjectExpiry");
    topbar.classList.toggle("ProjectTopBar");
    tasksArea.classList.toggle("tasksArea");

    title.textContent=Project.name;
    date.textContent=Project.date;
    expiry.textContent=Project.expiryDate;

    topbar.appendChild(title);
    
    projectBar.appendChild(topbar);
    projectBar.appendChild(date);
    projectBar.appendChild(expiry);
    projectBar.appendChild(tasksArea);

    dashboard.appendChild(projectBar);

    const buttonHolder = document.createElement("div");
    buttonHolder.classList.toggle("buttonHolder");
    topbar.appendChild(buttonHolder); 

    
    const arrowButton = document.createElement("img");
    arrowButton.src = dropDown;
    arrowButton.classList.toggle("arrowButton");
    
    buttonHolder.appendChild(arrowButton);

    makeTasks(Project,tasksArea);

    taskModal(Project,tasksArea);

    projectBar.appendChild(addBox);

    buttonHolder.addEventListener("click",()=>{

        projectBar.classList.toggle("Expanded");

        projectBar.querySelectorAll("*").forEach(element => { 
            element.classList.toggle("Expanded")
        });


    })

    addBox.addEventListener("click",()=>{
        TMbody.classList.toggle("Clicked"); 
    })


    projectBar.addEventListener("click",()=>{
         if(dashboard.classList.contains("remove")){
            projectBar.classList.add("removeProj");
            
        }else{
            projectBar.classList.remove("removeProj");
        }
    })
    projectBar.addEventListener("transitionend",(element)=>{
        if(element.propertyName == "transform"){
            dashboard.classList.remove("remove")
            app.removeProject(Project);
            makeUI(app);

        }
            
    })

}

export {makeProject};