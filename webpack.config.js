const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

// const env = process.env.NODE_ENV || 'undefined';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // entry: './src/index.jsx',
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    // new UglifyJSPlugin(),
    // new OptimizeJsPlugin({
    //   sourceMap: false
    // })
  ]
};

// if (env === 'production') {
//   plugins.push(
//     new webpack.optimize.UglifyJsPlugin(),
//     new OptimizeJsPlugin({
//       sourceMap: false
//     })
//   );
// }