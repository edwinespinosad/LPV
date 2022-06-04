import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  usuario = new Usuario(0, "", "", 0);

  constructor() { }

  ngOnInit(): void {
    const clave = Math.floor(Math.random() * 1000) + 1;
    this.usuario.clave = clave;
  }

  formSubmit() {
    console.log(this.usuario);
  }
}
