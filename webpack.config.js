var path = require('path');

var config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },      
      { test: /\.json$/, 
        loader: 'json-loader' 
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  node: {
    // console: 'true',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;