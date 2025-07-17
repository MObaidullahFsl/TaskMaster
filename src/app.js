import Project from "./modules/project";
import Note from "./modules/note";
import Todo from "./modules/todo";

class App{
    constructor( ){
        this.ProjectList = [];
    }

    makeApp(){

        const date = new Date();
        const tomorrow  = new Date(date);
        tomorrow.setDate(date.getDate()+1);
        const defaultTodo = new Todo("Default Task","Hey this is a default Task supposed to remind you something useful", tomorrow, "Low",false);
        const defaultNote = new Note();

        const DefaultProject = new Project([defaultTodo],[defaultNote],tomorrow);

        this.ProjectList.push(DefaultProject);
            
    }
}



export default App