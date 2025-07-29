
import Note from "../modules/note";
import Project from "../modules/project";
import Todo from "../modules/todo";
import { makeUI } from "../ui/appUI";

function storageFix(app) {
  if (localStorage.length == 0) {
    console.log("empty storage!");
    populateStorage(app);
  } else {
    loadFromStorage(app);
  }
}


function populateStorage(app){

  localStorage.clear();

  localStorage.setItem("app", JSON.stringify(app.toJSON()));

  loadFromStorage(app);

}

function loadFromStorage(app) {

  const loadedApp = JSON.parse(localStorage.getItem("app"));

  app.ProjectList.length = 0;
  
  loadedApp.ProjectList.forEach(project => {

    const newProj = new Project(project.name,project.color,[],[],project.expiryDate);

    project.todoList.forEach(task =>{
      const newTask = new Todo(task.title,task.description,task.dueDate,task.priority,task.done);
      newProj.addTask(newTask);
    })
    project.notesList.forEach(note =>{
      const newNote = new Note(note.text);
      newProj.addNote(newNote);
    })
    
    app.addProject(newProj);
  });

  makeUI(app);
}

export {populateStorage,loadFromStorage}

export default storageFix;
