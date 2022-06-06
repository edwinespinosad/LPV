const cartCtrl = {};

const Cart = require('../models/Cart');

cartCtrl.addToCart = async (req, res) => {
    console.log(req.body);
    const newCart = new Cart(req.body);
    await newCart.save();
    res.send({ message: 'Cart added' });
}

cartCtrl.getCart = async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.find({usuarioId: id});
    res.json(cart);
}

cartCtrl.updateCart = async (req, res) => {
    const { id } = req.params;
    const filter = {_id: id}
    const cart = {
        cantidad: req.body.cantidad,
    };
    
    await Cart.findOneAndUpdate(filter, cart, {new: true});
    res.json({ status: 'Cart updated' });
}

cartCtrl.deleteCart = async (req, res) => {
    const { id } = req.params;
    await Cart.findByIdAndRemove(id);
    res.json({ status: 'Cart deleted' });
}

cartCtrl.deleteItem = async (req, res) => {
    const { id } = req.params;
    await Cart.findByIdAndRemove(id);
    res.json({ status: 'Item deleted' });
}


module.exports = cartCtrl;