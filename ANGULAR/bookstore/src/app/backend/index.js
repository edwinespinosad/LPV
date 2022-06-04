'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bookstore').
    then(() => {
        console.log('Conectado a la base de datos');
        // Creacion del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    }).catch(err => console.log(err));


// require('./connection');

// const Book = require('./models/Books');

// const book = new Book({
//     id: 13,
//     titulo: 'El señor de los anillos',
//     autor: 'J.R.R. Tolkien',
//     precio: 100,
//     descripcion: 'El señor de los anillos',
//     imagen: '14.jpg'
// })

// book.save((err, documents) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(documents);
//     }
// });



// console.log(book);