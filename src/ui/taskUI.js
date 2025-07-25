import "../styles/taskStyles.css"
import { createTask } from "../ui/createTask";

function makeTasks(Project,tasksArea){
    
    tasksArea.innerHTML = "";

    let tasksList = Project.todoList;
    
    tasksList.forEach(task=>{

    const taskBar = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDesc = document.createElement("div");
    const taskDue = document.createElement("div");
    const priority = document.createElement("div");
    const topRow = document.createElement("div");
    const done = document.createElement("input");
    
    done.type = "checkbox";

    let taskdone = task.done;

    taskBar.classList.add("taskBar");
    taskTitle.classList.toggle("taskTitle");    
    taskDesc.classList.toggle("taskDesc");
    taskDue.classList.toggle("taskDue");
    priority.classList.toggle("priority");
    done.classList.toggle("done");

    taskBar.appendChild(topRow);
    topRow.appendChild(taskTitle);
    topRow.appendChild(done);
    taskBar.appendChild(taskDesc)
    taskBar.appendChild(taskDue);

        taskTitle.textContent = task.title;
        taskDesc.textContent = task.description;
        priority.textContent = task.priority;
        taskDue.textContent = task.dueDate;

    tasksArea.appendChild(taskBar);

     createTask(Project,tasksArea);
    
    })
    

}

function closeProject(tasksArea){
    tasksArea.removeChild(taskBar);
}


export {makeTasks,closeProject}