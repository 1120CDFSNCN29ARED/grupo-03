const productoController = {

producto: (req, res) => {
    res.locals.title = ".: PetShop - Productos :."
    res.render('producto');

}


}

module.exports = productoController;