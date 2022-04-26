import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'libro',
    templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']

})
export class LibroComponent {
    public title = 'Ejercicios-Angular';
    constructor() {
        console.log('LibroComponent constructor');
    }

    ngOnInit() {
        console.log('LibroComponent ngOnInit');
    }
}
