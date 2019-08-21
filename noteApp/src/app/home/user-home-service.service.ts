import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../shared/note';

@Injectable({
  providedIn: 'root'
})
export class UserHomeServiceService {

  constructor(private http: HttpClient) { }

  getUserNotes(id: number): Observable<Note[]> {
    const url= 'http://localhost:8022/noteappApi/getUserNotes/' + id;
    return this.http.get<Note[]>(url);
  }
}
