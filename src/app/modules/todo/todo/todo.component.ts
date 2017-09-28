import { Component, OnInit } from '@angular/core';
import { Todo } from "../todo"
import { TodoService } from "../todo.service"
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title: String = "";
  todos: Todo[] = [];
  searchValue: String = "";

  constructor(private TodoService: TodoService) {
  }

  addNewTodo() {
    this.TodoService.addNew(new Todo({ title: this.title })).subscribe(todos => {
      this.getTodos();
      this.title = ""


    }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      })
  }

  updateCount() {
    this.TodoService.updateCount(this.todos.length);
  }

  deleteTodo(id) {
    this.TodoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
      this.updateCount();
    }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      })
  }

  markCompleted(todo) {
    todo.completed = true;
    this.TodoService.markCompleted(todo).subscribe(() => { this.getTodos() }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      })
  }

  getTodos() {
    this.TodoService.getAll().subscribe(todos => {
      this.todos = todos;
      this.updateCount()
    }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      })
  }

  ngOnInit() {
    this.getTodos();
  }

  ngOnDestroy() {
    console.log("Component TodoComponent destroyed")
  }

}
