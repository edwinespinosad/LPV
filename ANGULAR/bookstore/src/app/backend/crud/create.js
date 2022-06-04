require('../connection');
const Book = require('../models/Books');

const createBook = async () => {
    const book = new Book({
        id: 12,
        titulo: 'La senda del perdedor',
        autor: 'Charles Bukowski',
        precio: 150,
        descripcion: 'La senda del perdedor',
        imagen: '13.jpg'
    })

    await book.save();
}

createBook();