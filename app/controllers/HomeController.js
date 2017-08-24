var tmp = require('../models/category');
var getcategory;
tmp.GetCategories(function( err, category){
    getcategory = category;
});
var homeController = {
    index: function(req, res){
        res.render('index',{
            title: 'index page',
            message: 'Hello page',
            page: 'index',
            category: getcategory
        })
    }
}
module.exports = homeController;