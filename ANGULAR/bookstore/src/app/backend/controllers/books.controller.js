const bookCtrl = {};

const Book = require('../models/Books');

bookCtrl.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
}

bookCtrl.createBook = async (req, res) => {
    console.log(req.body);
    const newBook = new Book(req.body);
    await newBook.save();
    res.send({ message: 'Book saved' });
}

bookCtrl.getBook = async (req, res) => {
    const {id} = req.params;
    const book = await Book.findById(id);
    res.json(book);
    console.log(id);
    console.log(book);
}

bookCtrl.getBooksByCategory = async (req, res) => {
    const books = await Book.find({ temaID: req.params.categoriaID });
    res.send(books);
}

module.exports = bookCtrl;