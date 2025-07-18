
class Todo {    
    constructor(title, description, dueDate, priority, done){
        this.title = title; 
        this.description = description; 
        this.dueDate= dueDate; 
        this.priority = priority; 
        this.done = done; 
    }

    set increasePriority(newPriority){
        this.priority=newPriority;
    }
    
}

export default Todo;