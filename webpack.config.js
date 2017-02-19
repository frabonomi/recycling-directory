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
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader?importLoaders=1!postcss-loader'),
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      options: { presets: ['es2015', 'stage-2'] },
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
