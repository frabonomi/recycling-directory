const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      options: { presets: ['es2015'] },
      exclude: path.resolve(__dirname, "node_modules")
    }]
  }
};
