import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  providers: [BookService, CartService]
})
export class PreviewComponent implements OnInit {
  id: string;
  book: any;
  public cart: Cart;

  constructor(public bookService: BookService, private route: ActivatedRoute, private cartService: CartService) {
    this.id = this.route.snapshot.params['id'];
    this.cart = new Cart("", "", 0, 0, "", "", "");

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

  addToCart(id: string, titulo: string, precio: number, imagen: string, tema: string) {

    const input = document.getElementById("quantity") as HTMLInputElement | null;
    if (input) {

      var cantidad = parseInt(input?.value);
      console.log("Cantidad: " + cantidad + " " + typeof (cantidad));
      let usuarioId = localStorage.getItem("usuarioId") || "";

      this.cart = new Cart(usuarioId, id, cantidad, precio, titulo, imagen, tema);
      
      this.cartService.addToCart(this.cart).subscribe(
        response => {
          console.log(response);
          const alert = document.createElement('div');
          alert.classList.add('alert');
          alert.classList.add('alert-success');
          alert.classList.add('alert-dismissible')
          alert.classList.add('fade');
          alert.classList.add('show');
          alert.innerHTML = `
                    <strong>Product successfully added to your shopping cart!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
          document.getElementsByClassName('book')[0].prepend(alert);
        },
        error => {
          console.log(error);
          const alert = document.createElement('div');
          alert.classList.add('alert');
          alert.classList.add('alert-danger');
          alert.classList.add('alert-dismissible')
          alert.classList.add('fade');
          alert.classList.add('show');
          alert.innerHTML = `
                    <strong>Error al agregar libro!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
          document.getElementsByClassName('book')[0].prepend(alert);
        }
      );
    }
    console.log(id);

  }
}
