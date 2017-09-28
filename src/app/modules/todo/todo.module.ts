import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from "./todo/todo.component"
import { TodoService } from "./todo.service"
import { FormsModule } from '@angular/forms';
import { TodoRouteModule } from './todo-routing.module';
import { SearchToDoPipe } from './search-to-do.pipe';
import { TodoCountBadgeComponent } from './todo-count-badge/todo-count-badge.component';
import { HideDoneDirective } from './directives/hide-done.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRouteModule
  ],
  declarations: [
    TodoComponent,
    SearchToDoPipe,
    TodoCountBadgeComponent,
    HideDoneDirective
  ],
  providers:[TodoService],
  exports: [TodoCountBadgeComponent]
})
export class TodoModule {
  

 }
