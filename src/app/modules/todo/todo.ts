interface TodoItem {
    title: String;
    completed?: Boolean;
}

interface AdvancedTodoItem extends TodoItem {
    planned?: Date;
}

export class Todo implements AdvancedTodoItem {
    id: Number = Date.now();
    title: String;
    completed: Boolean = false;

    constructor(values: TodoItem) {
        Object.assign(this, values)
    }
}
