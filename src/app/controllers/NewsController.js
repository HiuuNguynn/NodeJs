const NewsController = {
    index: (req, res) => {
        res.render('news');
    },
    show: (req, res) => {
        res.send('news detail');
    },
};

export default NewsController;
