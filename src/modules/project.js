
class Project {
    constructor(name = "sample project" ,todoList = [], notesList = [],expiryDate) {
        this.name = name;
        this.todoList = todoList;
        this.notesList = notesList;
        this.date = new Date().getDate();
        this.expiryDate = expiryDate;
    }

    addTask(task){
        this.todoList.push(task);
    }
    removeTask(task){
        this.todoList = this.todoList.filter((todo)=>todo.name != task.name);
    }
    
}

export default Project