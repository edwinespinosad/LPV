import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>;

  constructor() { 

    this.peliculas = [
      new Pelicula('Batman', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, et?', 'batman.jpg'),
      new Pelicula('Big Fish', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, et?', 'big fish.jpg'),
      new Pelicula('El Hobbit', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, et?', 'el hobbit.jpg'),
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);

  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
