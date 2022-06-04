'use strict'

var express = require('express');
var bodyParser = require('body-parser');
// const cors = require('cors');

var app = express();

// cargar archivos rutas
var proyecto_routes = require('./routes/proyecto');

// middlewares
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de prueba</h1>"
    );
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query.materia);
    res.status(200).send({
        message: 'Todo ha ido bien'
    });
});

app.post('/prueba/:id', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.materia);
    console.log(req.params.id);
    res.status(200).send({
        message: 'Todo ha ido bien'
    });
})

app.use('/api', proyecto_routes);

// Exportar
module.exports = app;