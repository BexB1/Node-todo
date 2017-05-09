var express = require('express');
var app = express();
var path = require('path')
var mongoose = require('mongoose');
var config = require('./config');
var routes = require('./config/routes');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/build', express.static(__dirname + '/build'));

var vue = require('vue');
app.engine('vue', vue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
  componentsDir: path.join(__dirname, '/views/components'),
  defaultLayout: 'layout'
});

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.use('/', routes);

app.listen(port, function() {
  console.log("App listening on port 3000, cap'n.")
})
