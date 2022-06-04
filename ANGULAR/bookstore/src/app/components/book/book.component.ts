import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
// import {Book}
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  tema: any;

  constructor(public bookService: BookService, private route: ActivatedRoute) { 
      this.tema = this.route.snapshot.queryParamMap.get('temaID');
      console.log("Tema URL:",this.tema);
    }
    
    ngOnInit(): void {
    this.getBooksByCategory(this.tema);
  }

  getBooksByCategory(tema: string = ''){
    this.bookService.getBooksByCategory(tema).subscribe((res) => {
      this.bookService.books = res;
    });
  }

  // getBook(id: string = ''){
  //   this.bookService.getBook(id).subscribe((res) => {
  //     this.bookService.books = res;
  //   });
  // }


}
