require('../connection');
const Book = require('../models/Books');

const someFunction = async () => {
    const result = await Book.deleteOne({id: 12});
    console.log(result);
}

someFunction();