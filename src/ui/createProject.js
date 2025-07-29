import "../styles/PMStyles.css";
import { body,dashboard } from "./domHelpers";
import Project from "../modules/project"
import { makeProject } from "./projectUI";
import Note from "../modules/note"
import app from "../index";
import { populateStorage } from "../storage/storageFix";
        import closebutton from "../assets/close.png"



const ProjModalBody = document.createElement("div");
const title = document.createElement("div");
const note = document.createElement("div");
const name = document.createElement("div");
const dueDate = document.createElement("div");
const color = document.createElement("div");

const nameLabel = document.createElement("label");
const dueDateLabel = document.createElement("label");
const colorLabel = document.createElement("label");
const noteLabel = document.createElement("label");

const nameInput = document.createElement("input");
const dueDateInput = document.createElement("input");
const colorInput = document.createElement("input");
const noteInput = document.createElement("input")

const submitPM = document.createElement("button");
const heading = document.createElement("div");
    const cross = document.createElement("img");
        cross.src = closebutton;

function createProjectModal(){

heading.classList.add("PMheading");
ProjModalBody.classList.add("PMbody");
title.classList.add("PMtitle");
name.classList.add("PMname");
dueDate.classList.add("PMdueDate");
color.classList.add("PMcolor");
note.classList.add("PMnote");


submitPM.textContent = "Enter";


    const date = new Date();
    const tomorrow  = new Date(date);
    tomorrow.setDate(date.getDate()+1);
    const formattedDate = tomorrow.toISOString().split('T')[0];


nameInput.type = "text";
dueDateInput.type = "date";
colorInput.type = "color";
noteInput.type = "text";

nameInput.value = "Default Project";
colorInput.value = "#0b3c49";
noteInput.value = "default note";
dueDateInput.value = formattedDate;

nameLabel.for="text"
dueDateLabel.for="date"
colorLabel.for="color"
noteLabel.for="text"

heading.textContent = "MAKE PROJECT"
nameLabel.textContent="Name"
dueDateLabel.textContent="Due Date"
colorLabel.textContent="Color"
noteLabel.textContent="Note"

name.appendChild(nameLabel);
dueDate.appendChild(dueDateLabel);
color.appendChild(colorLabel);

name.appendChild(nameInput);
dueDate.appendChild(dueDateInput);
color.appendChild(colorInput);

note.appendChild(noteLabel);
note.appendChild(noteInput);

ProjModalBody.appendChild(cross);
ProjModalBody.appendChild(heading);
ProjModalBody.appendChild(title);
ProjModalBody.appendChild(name)
ProjModalBody.appendChild(dueDate);
ProjModalBody.appendChild(color);
ProjModalBody.appendChild(note);
ProjModalBody.appendChild(submitPM);





if(body.querySelector(".PMbody")){
    return;
}
submitPM.addEventListener("click",()=>{
    const nameVal = nameInput.value;
    const dueVal  = dueDateInput.value;
    const colorVal = colorInput.value;
    const noteVal  = noteInput.value;  
    const newNote = new Note(noteVal);
    const newProj = new Project(nameVal,colorVal,[],[newNote],dueVal);
    app.addProject(newProj);
    
    ProjModalBody.classList.remove("Clicked");

    dashboard.innerHTML = "";

    for(const p in app.ProjectList){
         makeProject(app.ProjectList[p]);
     }

    // populateStorage(app);
})

cross.addEventListener("click",()=>{
    ProjModalBody.classList.remove("Clicked");
})

body.appendChild(ProjModalBody);

}

export { ProjModalBody,createProjectModal };
