
class Project {
    constructor(name = "sample project" ,color,todoList = [], notesList = [],expiryDate) {
        this.name = name;
        this.todoList = todoList;
        this.notesList = notesList;
        this.date = new Date();
        this.expiryDate = expiryDate;
        this.color = color;
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
    setColor(color){
        this.color = color;
    }

}


export default Project