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

// bookCtrl.getBook = async (req, res) => {
//     const {id} = req.params;
//     const book = await Book.findById(id);

//     res.send(book);
//     // const book = await Book.findOne({ titulo: req.params.titulo });
//     // res.json(book);
//     console.log(id);
//     console.log(book);
// }

bookCtrl.getBook = async (req, res) => {
    const {id} = req.params;
    const book = await Book.findById(id);
    res.json(book);
    console.log(id);
    console.log(book);
}

bookCtrl.getBooksByCategory = async (req, res) => {
    // console.log("Route: ", req.params.categoriaID);
    const books = await Book.find({ temaID: req.params.categoriaID });
    //console.log(req.params.categoriaID);
    res.send(books);
    // console.log(books);
}



// bookCtrl.editBook = async(req, res) => { 
//     await Book.findByIdAndUpdate(req.params.id, req.body);
//     res.json({ message: 'Book ' + req.params.id + ' updated' });
// }
// bookCtrl.deleteBook = async (req, res) => {
//     await Book.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Book ' + req.params.id + ' deleted' });
// }




module.exports = bookCtrl;