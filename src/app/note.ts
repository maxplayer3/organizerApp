interface NoteInterface {
    title: String;
    text: String;
    tag?: String
}

export class Note {
    id: number = Date.now();
    title: String;
    text: String;
    tag: String;
    constructor(values: NoteInterface) {
        this.id = Date.now();
        this.title = values.title;
        this.text = values.text;
        this.tag = values.tag || null;
    }
}
