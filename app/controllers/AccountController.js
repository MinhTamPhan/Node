var tmp = require('../models/category');
var getcategory;
tmp.GetCategories(function( err, category){
    getcategory = category;
});
var model = require('../models/account')
const md5 = require('md5');
var accountController = {
    login: function(req, res){
        res.render('account/login',{
            title: 'login page',
            category: getcategory,
        })
    },
    loginpost: function( req, res){
        User = {
            username: req.body.username,
            password: md5(req.body.password)
        };
        model.CheckUser(User, function( queryResult ){
            //console.log(queryResult);
            if (queryResult != null){
                req.session.login = 1;                
                var id = queryResult.id;
                req.session.id = null
                // console.log(req.session.login);
                // console.log(req.session.id);
                res.redirect('/index');
            }
            else
                res.redirect('/login');
        });       
    }
}
module.exports = accountController;