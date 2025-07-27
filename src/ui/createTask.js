import "../styles/TMStyles.css";
import { body,dashboard } from "./domHelpers";
import Todo from "../modules/todo";
import { makeProject } from "./projectUI";
import { makeTasks } from "./taskUI";

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

function taskModal(Project,taskArea){


TMbody.classList.add("TMbody");
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

submitTM.textContent = "submit";

titleInput.type = "text";
descInput.type = "text";
dueDateInput.type = "date";
prioritySelect.name = "Priority";
prioritySelect.id = "Priority";

titleLabel.for="text"
dueDateLabel.for="date"
priorityLabel.for="priority"

titleLabel.textContent="title"
descLabel.textContent = "Description"
dueDateLabel.textContent="date"
priorityLabel.textContent="priority"

prioritySelect.appendChild(lowOption);
prioritySelect.appendChild(medOption);
prioritySelect.appendChild(highOption);

title.appendChild(titleLabel);
dueDate.appendChild(dueDateLabel);
priority.appendChild(priorityLabel);
desc.appendChild(descLabel);
priority.appendChild(priorityLabel);

title.appendChild(titleInput);
dueDate.appendChild(dueDateInput);
desc.appendChild(descInput);
priority.appendChild(prioritySelect);

TMbody.appendChild(title);
TMbody.appendChild(desc);
TMbody.appendChild(dueDate);
TMbody.appendChild(priority);
TMbody.appendChild(submitTM);

body.appendChild(TMbody);

submitTM.addEventListener("click",()=>{
    const titleVal = titleInput.value;
    const descVal = descInput.value;
    const dueVal  = dueDateInput.value;
    const priorityVal = prioritySelect.value; 

    const newTodo = new Todo(titleVal,descVal,dueVal,priorityVal);
    
    Project.addTask(newTodo);
    TMbody.classList.remove("Clicked");
    makeTasks(Project,taskArea);
})


}

export { TMbody,taskModal };
