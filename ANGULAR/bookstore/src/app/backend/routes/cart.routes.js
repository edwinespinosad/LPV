const { Router } = require('express');
const router = Router();

const cartCtrl = require('../controllers/cart.controller.js');

router.get('/cart/:id', cartCtrl.getCart);
router.post('/cart/add', cartCtrl.addToCart);

router.put('/cart/:id', cartCtrl.updateCart);

router.delete('/cart/:id', cartCtrl.deleteItem);
module.exports = router;