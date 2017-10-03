import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
@Component({
  selector: 'app-todo-count-badge',
  templateUrl: './todo-count-badge.component.html',
  styleUrls: ['./todo-count-badge.component.scss']
})
export class TodoCountBadgeComponent implements OnInit {
  count = 0

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getCount().subscribe((data) => {
      this.count = data
    }, (err) => { console.log(err) })
  }

}
