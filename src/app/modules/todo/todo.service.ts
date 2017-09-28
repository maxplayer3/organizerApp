import { Injectable } from '@angular/core';
import { Todo } from "./todo"
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import { Constants } from "../../constants"
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodoService {

  todos: Todo[] = [];
  private todosCountSubject: Subject<any>;
  private todosCountRequest: Observable<any>;
  private countGot: Boolean;
  const = new Constants();

  constructor(private http: Http) { 
    this.todosCountSubject = new ReplaySubject(1);
  }



  addNew(body: Object): Observable<Todo[]> {
    return this.http.post(this.const.apiUrl + "/todos", body) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw('Server error')); //...errors if any
  }

  deleteTodo(id: String): Observable<any>{
    return this.http.delete(this.const.apiUrl + "/todos/" + id)
    .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    .catch((error: any) => Observable.throw( 'Server error')); //...errors if any
  }

  markCompleted(todo: Todo): Observable<any>{
    return this.http.put(this.const.apiUrl + "/todos/" + todo.id, todo)
    .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    .catch((error: any) => Observable.throw('Server error')); //...errors if any
  }

  // Fetch all existing comments
  getAll(): Observable<Todo[]> {
    return this.http.get(this.const.apiUrl + "/todos")
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw('Server error'));

  }

  getCount(){
    if(!this.countGot){
      let subscriber = this.getAll().subscribe((res) => {
    this.updateCount(res.length);
    this.countGot = true;
    subscriber.unsubscribe();
    })
  }

  return this.todosCountSubject.asObservable();
  }

  updateCount(count: number){
    this.todosCountSubject.next(count)
  }



}
