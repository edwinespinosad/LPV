import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [BookService]
})
export class PreviewComponent implements OnInit {
  // titulo : any;
  id: string;
  book: any;
  // libro: any;
  constructor(public bookService: BookService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getBook(this.id);
  }

  getBook(id: string) {
    this.bookService.getBook(id).subscribe((res) => {
      // this.bookService.book = res;
      this.book = Array.of(res);
      // this.book = res;
      console.log(this.book);
    })
  }

}
