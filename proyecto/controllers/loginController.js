const loginController = {
    login: (req, res) => {
        res.locals.title = ".: PetShop - LogIn :."
        res.render("login");
    },
};

module.exports = loginController;