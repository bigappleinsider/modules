const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/user.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    library: 'testapi',
    libraryTarget: 'umd',
    filename: 'testapi.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]

  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    })
  ]
};
