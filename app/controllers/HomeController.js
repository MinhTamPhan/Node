var homeController = {
    index: function(req, res){
        res.render('index',{
            title: 'index page',
            message: 'Hello page',
            page: 'index'
        })
    }
}
module.exports = homeController;