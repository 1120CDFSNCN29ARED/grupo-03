const carritoController = {

    carrito: (req, res) => {
        res.locals.title = ".: PetShop - Carrito :."
        res.render('carrito');

    }

}


module.exports = carritoController;