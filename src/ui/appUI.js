
import "../styles/appStyles.css" 
import {body,header,sidebar,links,dashboard,content,addProject,removeProject,homeOptions} from "./domHelpers"; 
import { makeProject } from "./projectUI";
import {ProjModalBody} from "./createProject"

function makeUI(app){
    console.log("starting ui");
    
    dashboard.innerHTML = "";

    const projectList = app.ProjectList;

    if(projectList.length === 0){
        return;
    }

     for(const p in projectList){
         makeProject(projectList[p]);
     }

     homeOptions();

     addProject.addEventListener("click",()=>{  
             ProjModalBody.classList.toggle("Clicked");
             if(dashboard.classList.contains("remove")){
                dashboard.classList.remove("remove");
             }
         
     })

     removeProject.addEventListener("click",()=>{  
             dashboard.classList.toggle("remove");
             alert("Select Project to Remove!");
         
     })
     
     

}

export {makeUI}