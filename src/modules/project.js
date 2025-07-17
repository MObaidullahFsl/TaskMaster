
class Project {
    constructor(todoList = [], notesList = [],expiryDate) {
        this.todoList = todoList;
        this.notesList = notesList;
        this.date = new Date().getDate();
        this.expiryDate = expiryDate;
    }
}

export default Project