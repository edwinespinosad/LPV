var articulo = {
    clave: 'EA01',
    modelo: 'clasico',
    color: ' rojo',
    cambiaColor: function (nuevo_color) {
        this.color = nuevo_color;
        console.log(this);
    }
};

console.log(articulo);
articulo.cambiaColor(("verde"));
