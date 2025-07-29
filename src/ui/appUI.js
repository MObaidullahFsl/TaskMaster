
import "../styles/appStyles.css" 
import {body,header,sidebar,links,dashboard,content,addProject,removeProject,homeOptions} from "./domHelpers"; 
import { makeProject } from "./projectUI";
import {ProjModalBody,createProjectModal} from "./createProject"

function makeUI(app){
    console.log("starting ui");
    
    dashboard.innerHTML = "";

    const projectList = app.ProjectList;

    if(!projectList){
        return;
    }
     for(const p in projectList){
         makeProject(projectList[p]);
     }

     homeOptions();

     createProjectModal();

    
     

}

export {makeUI}