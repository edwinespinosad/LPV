import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de angular';
  }

  saveProject(project: Project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'save-project', params, { headers: headers });
  }

  getProjects(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'getProjects', { headers: headers });
  }

  getProject(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'getProject/' + id, { headers: headers });
  }

  deleteProject(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'deleteProject/' + id, { headers: headers });
  }

  editProject(id: string, data:any): Observable<any> {
    let params = JSON.stringify(data);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'editProject/' + id, params, { headers: headers });
  }

}
