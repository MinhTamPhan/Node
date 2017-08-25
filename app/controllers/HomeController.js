var tmp = require('../models/category');
var getcategory;
tmp.GetCategories(function( err, category){
    getcategory = category;
});
var homeController = {
    index: function(req, res){
        res.render('home/index',{
            title: 'index page',
            page: 'index',
            category: getcategory
        })
    }
}
module.exports = homeController;