import "../styles/PMStyles.css";
import { body,dashboard } from "./domHelpers";
import Project from "../modules/project"
import { makeProject } from "./projectUI";
import Note from "../modules/note"
import app from "../index";

const ProjModalBody = document.createElement("div");
const title = document.createElement("div");
const note = document.createElement("div");
const name = document.createElement("div");
const dueDate = document.createElement("div");
const color = document.createElement("div");

ProjModalBody.classList.toggle("PMbody");
title.classList.toggle("PMtitle");
name.classList.toggle("PMname");
dueDate.classList.toggle("PMdueDate");
color.classList.toggle("PMcolor");
note.classList.toggle("PMnote");


const nameLabel = document.createElement("label");
const dueDateLabel = document.createElement("label");
const colorLabel = document.createElement("label");
const noteLabel = document.createElement("label");

const nameInput = document.createElement("input");
const dueDateInput = document.createElement("input");
const colorInput = document.createElement("input");

const submitPM = document.createElement("button");
submitPM.textContent = "submit";

nameInput.type = "text";
dueDateInput.type = "date";
colorInput.type = "color";

const noteInput = document.createElement("input")
noteInput.type = "text";

nameLabel.for="text"
dueDateLabel.for="date"
colorLabel.for="color"
noteLabel.for="text"


nameLabel.textContent="name"
dueDateLabel.textContent="date"
colorLabel.textContent="color"
noteLabel.textContent="Note"

name.appendChild(nameLabel);
dueDate.appendChild(dueDateLabel);
color.appendChild(colorLabel);

name.appendChild(nameInput);
dueDate.appendChild(dueDateInput);
color.appendChild(colorInput);

note.appendChild(noteLabel);
note.appendChild(noteInput);

ProjModalBody.appendChild(title);
ProjModalBody.appendChild(name)
ProjModalBody.appendChild(dueDate);
ProjModalBody.appendChild(color);
ProjModalBody.appendChild(note);
ProjModalBody.appendChild(submitPM);



body.appendChild(ProjModalBody);

submitPM.addEventListener("click",()=>{
    const nameVal = nameInput.value;
    const dueVal  = dueDateInput.value;
    const colorVal = colorInput.value;
    const noteVal  = noteInput.value;  
    const newNote = new Note(noteVal);
    const newProj = new Project(nameVal,[],[newNote],dueVal);
    app.addProject(newProj);
    
    dashboard.innerHTML = "";

    for(const p in app.ProjectList){
         makeProject(app.ProjectList[p]);
     }
})

export { ProjModalBody };
