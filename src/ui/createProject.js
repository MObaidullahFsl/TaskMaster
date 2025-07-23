
import "../styles/PMStyles.css" 
import {body} from "./domHelpers"; 



const ProjModalBody = document.createElement("div");
const title = document.createElement("div");
const nameForm = document.createElement("form");
const dueDateForm = document.createElement("form");
const colorForm = document.createElement("form");
const note = document.createElement("div");



ProjModalBody.classList.toggle("PMbody");
title.classList.toggle("PMtitle");
nameForm.classList.toggle("PMname");
dueDateForm.classList.toggle("PMdueDate");
colorForm.classList.toggle("PMcolor");
note.classList.toggle("PMnote");

const name = document.createElement("div");
const dueDate = document.createElement("div");
const color = document.createElement("div");

const nameLabel = document.createElement("label");
const dueDateLabel = document.createElement("label");
const colorLabel = document.createElement("label");

const nameInput = document.createElement("input");
const dueDateInput = document.createElement("input");
//const colorInput = document.createElement("input");


body.appendChild(ProjModalBody);


export {ProjModalBody}
