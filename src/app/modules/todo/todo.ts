interface TodoItem{
    title: String;
    completed?: Boolean;
    
}

interface AdvancedTodoItem extends TodoItem{
    planned?: Date;
}

export class Todo implements AdvancedTodoItem{
    id: number = Date.now();
    title: String;
    completed: Boolean = false;
    // planned: Date --- not needed as far is option in AdvancedTodoItem

    constructor(values:TodoItem){
        Object.assign(this, values)
    }
}
