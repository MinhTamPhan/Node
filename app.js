const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');


app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.resolve('app/views/layouts'),
  partialsDir: path.resolve('app/views/partials'),
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('./app/views'));

var controller = require('./app/controllers')

app.use('/components',express.static('bower_components'));
app.use('/assets',express.static('./app/views/assets'));
app.get('/index', controller.home.index);

var port = 3000;
app.listen(3000, function () {
  console.log('Example app listening on 3000!');
});