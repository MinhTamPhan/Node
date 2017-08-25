var model = require('../models');
var getcategory;
model.category.GetCategories(function( err, category){
    getcategory = category;
});
var categoryController = {
    index: function(req, res){
        var id = req.params.id;
      
        model.product.getProduct(id, function( err, product){
            res.render('categories/index',{
                title: 'category',
                page: 'index',
                category: getcategory,
                products: product
            });
        })
        
        
    }
}
module.exports = categoryController;