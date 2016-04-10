var webpack = require('webpack');

module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel?presets[]=es2015,presets[]=react",
      exclude: [/node_modules/, /public/],
    }, {
      test: /\.jsx$/,
      loader: "react-hot!babel?presets[]=es2015,presets[]=react",
      exclude: [/node_modules/, /public/]
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!autoprefixer-loader",
      exclude: [/node_modules/, /public/]
    }, {
      test: /\.scss$/,
      loader: "style-loader!css-loader!autoprefixer-loader!sass",
      exclude: [/node_modules/, /public/]
    }]
  }
}
