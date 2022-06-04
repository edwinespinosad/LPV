import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;
  constructor() { 
    this.title = 'Edwin Jose De La Cruz Espinosa';
    this.subtitle = 'Alumno de Ingeniería en Computacion';
    this.web = 'edwinespinosad@gmail.com';
  }

  ngOnInit(): void {
  }

}
