import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  deleteNote(id:number, noteId:number): Observable<string> {
    const url = 'http://localhost:8022/noteappApi/delete/' + noteId + '/' + id;
    return this.http.delete<string>(url);
  }
}
