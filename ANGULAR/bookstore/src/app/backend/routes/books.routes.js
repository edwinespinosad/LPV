const { Router } = require('express');
const router = Router();

const bookCtrl = require('../controllers/books.controller.js');

router.get('/', bookCtrl.getBooks);
router.post('/', bookCtrl.createBook);
router.get('/:id', bookCtrl.getBook);

// router.post('/categoria', bookCtrl.getBooksByCategory);
router.get('/tema/:categoriaID', bookCtrl.getBooksByCategory);

router.get('/libro/:id', bookCtrl.getBook);

// router.put('/:id', bookCtrl.editBook);
// router.delete('/:id', bookCtrl.deleteBook);


module.exports = router;