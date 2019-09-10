import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../shared/note';
import { DBFile } from '../shared/dbfile';
import { UserFiles } from '../shared/user-files';

@Injectable({
  providedIn: 'root'
})
export class UserHomeServiceService {

  constructor(private http: HttpClient) { }

  getUserNotes(username: string): Observable<Note[]> {
    const url= 'http://localhost:8022/noteappApi/getUserNotes/' + username;
    return this.http.get<Note[]>(url);
  }

  getUserFiles(username: string): Observable<UserFiles[]> {
    const url= 'http://localhost:8022/noteappApi/getUserFiles/' + username;
    return this.http.get<UserFiles[]>(url);
  }

  getAllFiles(criteria: string): Observable<UserFiles[]> {
    const url= 'http://localhost:8022/noteappApi/getAllFiles/' + criteria;
    return this.http.get<UserFiles[]>(url);
  }

  // downloadFile(fileId: number): Observable<any> {
  //   console.log("In service class:::"+ fileId);
  //   const url= 'http://localhost:8022/noteappApi/downloadFile/'+ fileId;
  //   return this.http.get<any>(url);
  // }
}
