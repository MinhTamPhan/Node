const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
module.exports = function( app ){
    app.use('/components',express.static('bower_components'));
    app.use('/assets',express.static('./app/views/assets'));  
    app.use('/views',express.static('./app/views'));  
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    require('./views')(app);
    require('./route')(app);
};

