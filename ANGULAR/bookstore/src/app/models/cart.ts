export class Cart {
    constructor(
        public usuarioId: string,
        public idLibro: string,
        public cantidad: number,
        public precio: number,
        public nombreLibro: string,
        public imagen: string,
        public tema: string,
        public _id?: number
    ) { }
}