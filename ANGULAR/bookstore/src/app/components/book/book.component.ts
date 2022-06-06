import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../../models/cart';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService, CartService]
})
export class BookComponent implements OnInit {
  tema: any;
  public cart: Cart;

  constructor(public bookService: BookService, private route: ActivatedRoute, public cartService: CartService) {
    this.tema = this.route.snapshot.queryParamMap.get('temaID');
    console.log("Tema URL:", this.tema);
    this.cart = new Cart("", "", 0, 0, "", "", "");

  }

  ngOnInit(): void {
    this.getBooksByCategory(this.tema);
  }

  getBooksByCategory(tema: string = '') {
    this.bookService.getBooksByCategory(tema).subscribe((res) => {
      this.bookService.books = res;
    });
  }

  addToCart(id: string, titulo: string, precio: number, imagen: string, tema: string) {

    // const input = document.getElementById("quantity") as HTMLInputElement | null;
    // if (input) {

    var cantidad = parseInt("1");
    console.log("Cantidad: " + cantidad + " " + typeof (cantidad));
    let usuarioId = localStorage.getItem("usuarioId") || "";

    this.cart = new Cart(usuarioId, id, cantidad, precio, titulo, imagen, tema);

    this.cartService.addToCart(this.cart).subscribe(
      response => {
        console.log(response);
        const alert = document.createElement('div');
        alert.id = "alert";
        alert.classList.add('alert');
        alert.classList.add('alert-success');
        alert.classList.add('alert-dismissible')
        alert.classList.add('fade');
        alert.classList.add('show');
        alert.innerHTML = `
                    <strong>Product successfully added to your shopping cart!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
        document.getElementsByClassName('libros')[0].prepend(alert);
        window.setTimeout(function () {
          alert.remove();
        }, 3000);
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
    // }
    console.log(id);

  }

}
