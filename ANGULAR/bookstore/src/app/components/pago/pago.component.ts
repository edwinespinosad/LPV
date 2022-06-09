import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from '../../models/cart';
declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: any) => any; onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef | undefined;

  public cart: Cart[];
  public total: number;
  public envio: number;
  public tema: string;
  
  constructor(public cartService: CartService, private router: Router) {
    this.cart = [];
    this.total = 0;
    this.envio = 0;
    this.tema = "";
  }

  getCart() {
    console.log(localStorage.getItem('usuarioId'));
    this.cartService.getCart().subscribe((res) => {
      this.total = 0;
      this.cart = res;
      console.log(this.cart);
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

    },
      err => {
        console.log(err);
      });
  }

  producto = {
    descripcion: 'producto en venta',
    precio: 599.99,
    img: 'imagen de tu producto'
  }
  title = 'angular-paypal-payment';

  ngOnInit() {
    this.getCart();
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: this.producto.descripcion,
            amount: {
              currency_code: 'MXN',
              value: this.total
            }
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement!.nativeElement);
  }

}
