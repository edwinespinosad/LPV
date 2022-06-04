require('../connection');
const Book = require('../models/Books');

async function main() {
    const books = await Book.find();
    
    console.log(books);
}

main();