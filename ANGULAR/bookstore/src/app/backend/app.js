'use strict'
// const Book = require('../models/Books.js');
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

// cargar archivos rutas
var proyecto_routes = require('./routes/books.routes.js');
var cart_routes = require('./routes/cart.routes.js');
// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors

// Rutas

app.use('/api/books', proyecto_routes);
app.use('/api', cart_routes);

// Exportar
module.exports = app;