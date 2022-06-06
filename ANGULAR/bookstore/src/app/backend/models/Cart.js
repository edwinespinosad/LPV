const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    usuarioId: { type: String, required: true },
    idLibro: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    nombreLibro: { type: String, required: true },
    imagen: { type: String, required: true },
    tema: { type: String, required: true },
});

module.exports = model('Carrito', cartSchema);