
class Note{
    #text
    constructor(text = "Here you add your notes for this project. "){
       this.#text = text;
       this.date = new Date();
    }

    get text() {
        return this.#text;
    }

    set text(newText){
        this.#text = newText
    }
}

export default Note