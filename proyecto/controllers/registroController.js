const registroController = {

    registro: (req, res) => {
        res.locals.title = ".: PetShop - Registro :."
        res.render('registro');

    }


}

module.exports = registroController;