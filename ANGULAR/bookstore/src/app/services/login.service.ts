import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3700/api/users/new', params, { headers: headers });
  }

  getUser(email: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // let params = JSON.stringify(email);
    return this.http.get('http://localhost:3700/api/users/'+email, { headers: headers });
  }
}
