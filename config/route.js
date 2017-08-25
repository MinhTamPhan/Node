var controller = require('../app/controllers');
const router = require('express').Router;

module.exports = function( app ){
    var homeRoute = router()
    .get('/', controller.home.index);

    var categoryRoute = router()
    .get('/:id', controller.category.index);

    var loginRoute = router()
    .get('/', controller.account.login)
    .post('/',controller.account.loginpost);

    var SearchRoute = router()
    .post('/', controller.search.search);

    app.use('/index', homeRoute);
    app.use('/category', categoryRoute);
    app.use('/login', loginRoute);
    app.use('/search', SearchRoute);
}