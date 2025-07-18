
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
    removeTask(t){
        this.todoList = this.todoList.filter((todo)=>todo.title != t.title);
    }
    addNote(note){
        this.notesList.push(note);
    }
    removeNote(note){
        this.notesList=this.notesList.filter((n)=>{ n.text != note.text });
    }


}

export default Project