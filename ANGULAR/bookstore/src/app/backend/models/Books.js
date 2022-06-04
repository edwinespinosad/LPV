const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    id: { type: String},
    tema: { type: String},
    temaID: { type: Number},
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: false }, 
    imagen: { type: String, required: true }
});

module.exports = model('Libro', bookSchema);