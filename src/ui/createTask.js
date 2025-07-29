import "../styles/TMStyles.css";
import { body,dashboard } from "./domHelpers";
import Todo from "../modules/todo";
import { makeProject } from "./projectUI";
import { makeTasks } from "./taskUI";
import { populateStorage } from "../storage/storageFix";
import closebutton from "../assets/close.png"
import app from "../index";

function taskModal(Project,taskArea,projectBar){
    
    const TMbody = document.createElement("div");
    const title = document.createElement("div");
    const desc = document.createElement("div");
    const dueDate = document.createElement("div");
    const priority = document.createElement("div");
    
    const titleLabel = document.createElement("label");
    const dueDateLabel = document.createElement("label");
    const priorityLabel = document.createElement("label");
    const descLabel = document.createElement("label");
    
    const titleInput = document.createElement("input");
    const dueDateInput = document.createElement("input");
    const prioritySelect = document.createElement("select");
    const descInput = document.createElement("input");
    const lowOption = document.createElement("option");
    const medOption = document.createElement("option");
    const highOption = document.createElement("option");
    
    const submitTM = document.createElement("button");

    const heading = document.createElement("div");
    const cross = document.createElement("img");
        cross.src = closebutton;

heading.classList.add("TMheading");
TMbody.classList.add("TMbody");
TMbody.classList.add("Clicked"); 
title.classList.add("TMtitle");
desc.classList.add("TMdesc");
dueDate.classList.add("TMdueDate");
priority.classList.add("TMpriority");

lowOption.value = "low";
medOption.value = "medium";
highOption.value = "high";

lowOption.textContent = "Low";
medOption.textContent = "Medium";
highOption.textContent = "High";

submitTM.textContent = "Enter";

titleInput.type = "text";
descInput.type = "text";
dueDateInput.type = "date";
prioritySelect.name = "Priority";
prioritySelect.id = "Priority";


    const date = new Date();
    const tomorrow  = new Date(date);
    tomorrow.setDate(date.getDate()+1);
    const formattedDate = tomorrow.toISOString().split('T')[0];

titleInput.value = "Default Task";
descInput.value = "Hey this is a default Task supposed to remind you something useful";
dueDateInput.value = `${formattedDate}`;

titleLabel.htmlFor="title"
dueDateLabel.htmlFor="date"
priorityLabel.htmlFor="priority"

titleLabel.textContent="Title :"
descLabel.textContent = "Description :"
dueDateLabel.textContent="Due Date :"
priorityLabel.textContent="Priority :"
heading.textContent = "ADD TASK";

titleInput.id = "title";

prioritySelect.appendChild(lowOption);
prioritySelect.appendChild(medOption);
prioritySelect.appendChild(highOption);

prioritySelect.value = "low";

title.appendChild(titleLabel);
dueDate.appendChild(dueDateLabel);
priority.appendChild(priorityLabel);
desc.appendChild(descLabel);

title.appendChild(titleInput);
dueDate.appendChild(dueDateInput);
desc.appendChild(descInput);
priority.appendChild(prioritySelect);

TMbody.appendChild(cross);
TMbody.appendChild(heading)
TMbody.appendChild(title);
TMbody.appendChild(desc);
TMbody.appendChild(dueDate);
TMbody.appendChild(priority);
TMbody.appendChild(submitTM);


if(projectBar.querySelector(".TMbody")){
    return;
}
submitTM.addEventListener("click",()=>{
    TMbody.classList.remove("Clicked");
    const titleVal = titleInput.value;
    const descVal = descInput.value;
    const dueVal  = dueDateInput.value;
    const priorityVal = prioritySelect.value; 

    const newTodo = new Todo(titleVal,descVal,dueVal,priorityVal);
    
    Project.addTask(newTodo);
    makeTasks(Project,taskArea);

    
    populateStorage(app);
})

cross.addEventListener("click",()=>{
    TMbody.classList.remove("Clicked");
})

projectBar.appendChild(TMbody);
}

export {taskModal };
