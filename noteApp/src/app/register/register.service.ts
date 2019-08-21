import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { User } from '../shared/user';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<string> {
    const url = 'http://localhost:8022/noteappApi/register';
    return this.http.post<string>(url,user);
  }
}
