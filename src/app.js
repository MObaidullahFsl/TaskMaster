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
        const defaultTodo = new Todo("Default Task","Hey this is a default Task supposed to remind you something useful", tomorrow, "low",false);
        const defaultNote = new Note();
        const color = "#474448";

        const DefaultProject = new Project(name,color,[defaultTodo],[defaultNote],tomorrow);

        this.ProjectList.push(DefaultProject);

        // if (storageAvailable) {

        //  storageFix(this);

        // }else{

        // console.log("no storage support!");

        // }       
      
    }

    addProject(project){
        this.ProjectList.push(project);
    }

    removeProject(project){
        
        const date = project.date;
       
        this.ProjectList = this.ProjectList.filter((i)=> i.date != date);
        
    }

    listAll(){
        const totalTasks = [];
        this.ProjectList.forEach(element => {
            totalTasks.concat(element.todoList);
        });

        return totalTasks;
    }
    toJSON(){
        return{
        ProjectList: this.ProjectList,
            type: "app"
        }
    }
}




export default App