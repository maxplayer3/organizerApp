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
    let subscriber = this.TodoService.addNew(new Todo({ title: this.title })).subscribe(
      todos => {
        this.getTodos();
        this.title = "";
      },
      err => { console.log(err) },
      () => { subscriber.unsubscribe() })
  }

  updateCount() {
    this.TodoService.updateCount(this.todos.length);
  }

  deleteTodo(id) {
    let subscriber = this.TodoService.deleteTodo(id).subscribe(
      () => {
        this.getTodos();
        this.updateCount();
      },
      err => { console.log(err) },
      () => { subscriber.unsubscribe() })
  }

  markCompleted(todo) {
    todo.completed = true;
    let subscriber = this.TodoService.markCompleted(todo).subscribe(
      () => { this.getTodos() },
      err => { console.log(err) },
      () => { subscriber.unsubscribe() })
  }

  getTodos() {
    let subscriber = this.TodoService.getAll().subscribe(
      todos => {
        this.todos = todos;
        this.updateCount()
      },
      err => { console.log(err) },
      () => { subscriber.unsubscribe() })
  }

  ngOnInit() {
    this.getTodos();
  }

  ngOnDestroy() { // Lifecycle hook when component is destroyed
    console.log("Component TodoComponent destroyed")
  }

}
