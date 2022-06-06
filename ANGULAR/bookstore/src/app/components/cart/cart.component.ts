import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  public cart: Cart[];
  public total: number;
  public envio: number;
  public tema: string;
  constructor(public cartService: CartService) {
    this.cart = [];
    this.total = 0;
    this.envio = 0;
    this.tema = "";
  }

  ngOnInit(): void {
    this.getCart();
  }

  changeQuantity(id: number) {
    console.log("Cambiando cantidad");
    var input = "#cantidad" + id;
    const selectElement = document.querySelector(input) as HTMLSelectElement || null;
    const s = document.getElementById(input);
    if (selectElement != null) {
      console.log(selectElement.value);
      let cantidad = parseInt(selectElement.value);
      let data = {
        cantidad: cantidad
      }
      this.cartService.updateCart(id.toString(), data).subscribe((res) => {
        console.log(res);
        this.getCart();
      }, err => {
        console.log(err);
      })
    }
  }
  reloadCart() {

    for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index]['_id']) {
        console.log(this.cart[index]['_id']);
        let id = this.cart[index]['_id']?.toString();
        ///
        var input = ".cantidad" + id;
        const selectElement = document.querySelector(input);
        selectElement?.addEventListener('change', (event) => {
          console.log("Inside change event");
          const target = event.target as HTMLInputElement;
          console.log("Valor: " + target.value);
          let cantidad = parseInt(target.value);
        });
        ///
        let cantidad = this.cart[index]['cantidad'];
        // this.cartService.updateCart(id || "", this.cart[index]['cantidad']).subscribe((res) => {
        //   console.log(res);
        // }, err => {
        //   console.log(err);
        // }
        // );
      }
    }

  }

  getCart() {
    console.log(localStorage.getItem('usuarioId'));
    this.cartService.getCart().subscribe((res) => {
      this.total = 0;
      this.cart = res;
      console.log(this.cart);
      if (this.cart.length == 0) {
        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.classList.add('alert-warning');
        alert.classList.add('alert-dismissible')
        alert.classList.add('fade');
        alert.classList.add('show');
        alert.innerHTML = `
                    <strong>Your shopping cart is empty!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
        document.getElementsByClassName('articulos')[0].append(alert);
      } else {
        for (let index = 0; index < this.cart.length; index++) {
          this.total = this.total + this.cart[index]['precio'] * this.cart[index]['cantidad'];
          console.log(this.cart[index]['precio']);
          this.cart[index]['tema'] = this.cart[index]['tema'].toLowerCase();
        }
        if (this.total >= 299) {
          this.envio = 0;
        } else {
          this.envio = 100;
        }
      }
    },
      err => {
        console.log(err);
      });
  }

  removeItem(id: number) {
    this.cartService.deleteItem(id.toString()).subscribe((res) => {
      console.log(res);
      this.getCart();
      const alert = document.createElement('div');
        alert.id = "alert";
        alert.classList.add('alert');
        alert.classList.add('alert-danger');
        alert.classList.add('alert-dismissible')
        alert.classList.add('fade');
        alert.classList.add('show');
        alert.innerHTML = `
                    <strong>Item deleted!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    `;
        document.getElementsByClassName('articulos')[0].prepend(alert);
        window.setTimeout(function () {
          alert.remove();
        }, 3000);
    }, err => {
      console.log(err);
    })
  }

}
