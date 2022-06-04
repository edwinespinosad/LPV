'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proyectoSchema = new Schema({
    nombre: String,
    semestre: String,
    materia: String,
    anio: Number,
    imagen: String
});

module.exports = mongoose.model('Project', proyectoSchema);