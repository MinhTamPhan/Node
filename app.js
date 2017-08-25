const express = require('express');
const app = express();


require('./config')(app);
var port = 3000;
app.listen(3000, function () {
  console.log('App listening on 3000!');
});