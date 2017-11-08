const path = require('path');

module.exports = {
   resolve: {
      extensions: ['.js', '.jsx']
   },
   entry: './src/index.jsx',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            //  options: {
            //     presets: ['es2015']
            //  }
         },
         {
            test: /\.css$/,
            use: [
               { loader: 'style-loader' },
               {
                  loader: 'css-loader',
                  options: {
                     modules: true
                  }
               }
            ]
         }
      ]
   }
};
