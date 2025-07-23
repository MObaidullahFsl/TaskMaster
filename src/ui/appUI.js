
import "../styles/appStyles.css" 
import {body,header,sidebar,links,dashboard,content,addProject,makeProject,homeOptions} from "./domHelpers"; 

import {ProjModalBody} from "./createProject"

function makeUI(app){
    console.log("starting ui");
    
    const projectList = app.ProjectList;

     for(const p in projectList){
         makeProject(projectList[p]);
     }

     homeOptions();

     addProject.addEventListener("click",()=>{
        
        if(addProject.classList.contains("Clicked")){
             ProjModalBody.classList.toggle("Clicked");
        } else
            {
            ProjModalBody.classList.toggle("Clicked");

            } 
                
       
     })

}

export {makeUI}