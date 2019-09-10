import { Injectable } from '@angular/core';

import { DBFile } from '../shared/dbfile';
import { Uploadresponse } from '../shared/uploadresponse';
import { Observable } from 'rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient) { }


  uploadFile(dbFile: FormData, username: string, prv: string): Observable<Uploadresponse> {
    const url= 'http://localhost:8022/noteappApi/upload' + '/' + username + '/' + prv;
    return this.http.post<Uploadresponse>(url, dbFile);
    
  }
}
