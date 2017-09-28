import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from "./todo/todo.component"
const routes: Routes = [
  {path: 'todo', component: TodoComponent, data: {visibleName: "Todos", showInNavigation: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoRouteModule { }
