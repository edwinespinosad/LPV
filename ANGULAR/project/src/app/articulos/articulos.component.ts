import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos: Array<Articulo>;
  public estilos: String[];
  public mi_estilo: String;

  constructor() {
    this.mi_estilo = "Invierno";

    this.estilos = new Array();

    this.articulos = [
      new Articulo('Tenis', 'Reebok', 3000, 'Clasico', true),
      new Articulo('Tenis', 'Adidas', 2000, 'Verano', true),
      new Articulo('Tenis', 'Panam', 3500, 'Junior', true),
    ];
  }

  ngOnInit() {
    console.log(this.articulos);
    this.getEstilos();
  }

  getEstilos() {
    this.articulos.forEach((articulo, index) => {
      if (this.estilos.indexOf(articulo.estilo) < 0) {
        this.estilos.push(articulo.estilo);
      }
    });
  }

  getEstilo() {
    alert(this.mi_estilo);
  }

  addEstilo() {
    this.estilos.push(this.mi_estilo);
  }

  delEstilo(index: any) {
    this.estilos.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input Estilo');
  }

  onKeypressEvent(event: any) {
    console.log(event.target.value);
  }
}
