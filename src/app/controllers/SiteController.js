const SiteController = {
    // [GET] /
    index: (req, res) => {
        res.render('home');
    },
    search: (req, res) => {
        res.render('search');
    },
};

export default SiteController;
