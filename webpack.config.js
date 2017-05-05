var path = require('path');

var config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },      
      { test: /\.json$/, 
        loader: 'json-loader' 
      }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json']
  },
  node: {
    // console: 'true',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;