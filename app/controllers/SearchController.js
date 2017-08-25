var tmp = require('../models/category');
var getcategory;
tmp.GetCategories(function( err, category){
    getcategory = category;
});
const model = require('../models')
var searchController = {
    search: function(req, res){
        var str = req.body.stringSearch;
        model.search.getProduct( str, function ( err, product){
            res.render('categories/index',{
                title: 'Search',
                page: 'index',
                category: getcategory,
                products: product
            });
        });
        
    }
}
module.exports = searchController;