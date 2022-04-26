import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = '1er Ejercicio de Angular';
  public mostrar_Pelicula: boolean = true;

  ocultar_Pelicula(value: any){
    this.mostrar_Pelicula = value;
  }
}