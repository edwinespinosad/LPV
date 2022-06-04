import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL_API = 'http://localhost:3700/api/books/';
  books: Book[] = [];
  book: any;

  constructor(private http: HttpClient) { }

  getBooksByCategory(tema: string = '') {
    return this.http.get<Book[]>('http://localhost:3700/api/books/tema/' + tema);
  }

  getBook(id: string) {
    return this.http.get('http://localhost:3700/api/books/libro/' + id);
  }
}
