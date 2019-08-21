import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { User } from '../shared/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  //observable: async request
  login(user: User): Observable<User> {
    const url = 'http://localhost:8022/noteappApi/signin';
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':'+ user.password) });
    return this.http.post<User>(url,user);
}
}

