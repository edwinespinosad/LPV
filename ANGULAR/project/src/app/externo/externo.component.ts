import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: string = '';
  public check: boolean;

  public id: string = '';
  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.check = false;
  }

  ngOnInit() {
    // this.cargaUsuario();
  }

  onKeypressEvent(event: any) {
    console.log(event.target.value);
    this.userId = event.target.value;
    this.cargaUsuario(this.userId);
  }

  cargaUsuario(id: string = '') {
    this._peticionesService.getUser(id).subscribe(
      result => {
        this.user = result.data;
        this.check = true;
      },
      error => {
        console.log(<any>error);
        this.check = false;
      }
    );
  }

}