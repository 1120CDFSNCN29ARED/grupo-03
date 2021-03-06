    const indexController = {

        index: (req, res) => {
            res.locals.title = ".: PetShop - Home Page :."
            res.render('index');
            
        }

    }


    module.exports = indexController;