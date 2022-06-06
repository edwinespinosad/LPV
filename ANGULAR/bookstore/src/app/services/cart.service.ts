import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(cart: Cart): Observable<any> {
    // return this.http.get('/api/cart/create');
    let params = JSON.stringify(cart);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3700/api/cart/add', params, { headers: headers });
  }

  getCart(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let user = localStorage.getItem('usuarioId') || "";
    let link = 'http://localhost:3700/api/cart/' + user;
    // console.log(link);
    return this.http.get(link, { headers: headers });
  }

  updateCart(id: string, data:any): Observable<any> {
    // let params = JSON.stringify(cantidad);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put('http://localhost:3700/api/cart/' + id, data, { headers: headers });
  }

  deleteItem(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3700/api/cart/' + id, { headers: headers });
  }

  // updateCart(id: string, data: any) {
    // let params = JSON.stringify(cantidad);
    // console.log(data);
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.http.put('http://localhost:3700/api/cart/' + id, cantidad, { headers: headers });
  // }

}
