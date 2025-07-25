
import "../styles/appStyles.css" 
import {body,header,sidebar,links,dashboard,content,addProject,removeProject,homeOptions} from "./domHelpers"; 
import { makeProject } from "./projectUI";
import {ProjModalBody} from "./createProject"

function makeUI(app){
    console.log("starting ui");
    
    const projectList = app.ProjectList;

     for(const p in projectList){
         makeProject(projectList[p]);
     }

     homeOptions();

     addProject.addEventListener("click",()=>{  
             ProjModalBody.classList.toggle("Clicked");
         
     })

     removeProject.addEventListener("click",()=>{  
             console.log("remove");
             
         
     })
     
     

}

export {makeUI}