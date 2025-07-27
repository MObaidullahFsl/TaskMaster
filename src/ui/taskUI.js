import "../styles/taskStyles.css"
import { taskModal} from "../ui/createTask";

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
    const taskPrior = document.createElement("div");
    const taskContent = document.createElement("div");

    done.type = "checkbox";

    let taskdone = task.done;

    taskBar.classList.add("taskBar");
    taskTitle.classList.toggle("taskTitle");    
    taskDesc.classList.toggle("taskDesc");
    taskDue.classList.toggle("taskDue");
    priority.classList.toggle("priority");
    done.classList.toggle("done");
    topRow.classList.toggle("taskTopRow");
    taskPrior.classList.toggle("taskPrior");    
    taskContent.classList.toggle("taskContent");

    switch (task.priority) {
        case "low":
            taskPrior.style.backgroundColor = "green";
            break;
        case "medium":
            taskPrior.style.backgroundColor = "blue";
            break;
        case "high": 
            taskPrior.style.backgroundColor = "red";
            break;
        default:
            break;
    }

    topRow.appendChild(taskTitle);
    topRow.appendChild(done);
    taskContent.appendChild(topRow);
    taskContent.appendChild(taskDesc)
    taskContent.appendChild(taskDue);
    taskBar.appendChild(taskPrior);
    taskBar.appendChild(taskContent);

        taskTitle.textContent = task.title;
        taskDesc.textContent = task.description;
        priority.textContent = task.priority;
        taskDue.textContent = task.dueDate;

    tasksArea.appendChild(taskBar); 

    done.addEventListener("click",()=>{
        taskBar.classList.add("removeTask");
    })
    
    taskBar.addEventListener("transitionend",(transition)=>{
        if(transition.propertyName === "transform" && taskBar.classList.contains("removeTask")){
            Project.removeTask(task);
            makeTasks(Project,tasksArea);
        }
    })
    
    })
    
}
function closeProject(tasksArea){
    // tasksArea.removeChild(taskBar);
}


export {makeTasks,closeProject}