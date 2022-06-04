import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {
    public url: string;
    public Id: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = "https://reqres.in/";
        this.Id = '1';
    }

    getUser(id: string): Observable<any> {
        console.log(id);
        return this._http.get(this.url + 'api/users/' + id);
    }


}