import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable()
export class ArticuloService {
    public articulos: Array<Articulo>;

    constructor() {
        this.articulos = [
            new Articulo('Tenis', 'Reebok', 3000, 'Clasico', true),
            new Articulo('Tenis', 'Panam', 1500, 'Verano', false),
            new Articulo('Tenis', 'Adidas', 3500, 'Junior', true),
            new Articulo('Tenis', 'Nike', 3500, 'Junior', true),
            new Articulo('Tenis', 'Converse', 1800, 'Junior', false)
        ];
    }

    getTexto() {
        return "Texto desde un Servicio";
    }

    getArticulos(): Array<Articulo> {
        return this.articulos;
    }

}