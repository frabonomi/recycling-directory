const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      options: { presets: ['es2015'] },
      exclude: path.resolve(__dirname, "node_modules"),
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
};
