var configValues = require('./config');

module.exports = {
  detDbConnectionString: function() {
    return 'mongodb://' 
            + configValues.uname 
            + ':'
            + configValues.pwd
            + '@ds019058.mlab.com/nodetodosample'; 
  }
}