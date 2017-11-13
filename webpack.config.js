const webpack = require('webpack')
const path = require('path')

const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
}

module.exports = {
  entry: {
    app: './src/app'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'bundle/'),
    filename: '[name].bundle.js'
  },
  node: {
    net: 'empty',
    dns: 'empty',
    crypto: 'empty'
  },
  plugins
}
