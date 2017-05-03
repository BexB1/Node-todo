var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port, function() {
  console.log("App listening on port 3000, cap'n.")
})

