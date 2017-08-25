var controller = require('../app/controllers');
const router = require('express').Router;

module.exports = function( app ){
    var homeRoute = router()
    .get('/', controller.home.index);

    var categoryRoute = router()
    .get('/:id', controller.category.index);

    app.use('/index', homeRoute);
    app.use('/category', categoryRoute);
}