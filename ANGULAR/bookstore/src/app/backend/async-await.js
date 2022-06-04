require('./connection');
const Book = require('./models/Books');

async function main() {
    const book = new Book({
        id: 13,
        titulo: 'El señor de los anillos',
        autor: 'J.R.R. Tolkien',
        precio: 100,
        descripcion: 'El señor de los anillos',
        imagen: '14.jpg'
    })
    
    const bookSaved = await book.save();
    return bookSaved;
}

main().then(bookSaved => console.log(bookSaved)).catch(err => console.log(err));