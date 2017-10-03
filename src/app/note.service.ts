import { Injectable } from '@angular/core';
import { Note } from "./note"
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from "./constants"

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {
  const = new Constants();
  constructor(private http: Http) { }

  getNotes(): Observable<Note[]> {
    return this.http.get(this.const.apiUrl + "/notes")
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw('Server error')); //...errors if any
  }

  addNote(note: Note): Observable<any> {
    return this.http.post(this.const.apiUrl + "/notes", note)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  updateNote(note: Note): Observable<any> {
    return this.http.put(this.const.apiUrl + "/notes/" + note.id, note)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  deleteNote(id: String): Observable<any> {
    return this.http.delete(this.const.apiUrl + "/notes/" + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

}
