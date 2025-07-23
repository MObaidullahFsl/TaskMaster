import Project from "./modules/project";
import Note from "./modules/note";
import Todo from "./modules/todo";
import {makeUI} from "./ui/appUI"

class App{
    constructor( ){
        this.ProjectList = [];
    }

    makeApp(){

        const name = "Default Project"
        const date = new Date();
        const tomorrow  = new Date(date);
        tomorrow.setDate(date.getDate()+1);
        const defaultTodo = new Todo("Default Task","Hey this is a default Task supposed to remind you something useful", tomorrow, "Low",false);
        const defaultNote = new Note();

        const DefaultProject = new Project(name,[defaultTodo],[defaultNote],tomorrow);

        this.ProjectList.push(DefaultProject);

        
            
    }

    addProject(project){
        this.ProjectList.push(project);
    }

    removeProject(project){
        const toRemove = project.name;
        
        this.ProjectList = this.ProjectList.filter((i)=>i.name != toRemove);
        
    }

    listAll(){
        const totalTasks = [];
        this.ProjectList.forEach(element => {
            totalTasks.concat(element.todoList);
        });

        return totalTasks;
    }
}




export default App