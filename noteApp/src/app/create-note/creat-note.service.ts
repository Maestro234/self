import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../shared/note';
import { Observable } from 'rxjs';
import { Subject } from '../shared/subject';

@Injectable({
  providedIn: 'root'
})
export class CreatNoteService {
  private headers = new HttpHeaders ({ 'Content-Type': 'text/plain' });
  constructor(private http: HttpClient) { }

  createNotes(id:number, subject: Subject): Observable<string> {
    const url= 'http://localhost:8022/noteappApi/add/' + id;
    console.log("In create note service");
    return this.http.post<string>(url, subject, {responseType:'text' as 'json'});
  }

  getNotes(id:number): Observable<Note[]> {
    const url = 'http://localhost:8022/noteappApi/getUserNotes/' + id;
    return this.http.get<Note[]>(url);
  }
}
