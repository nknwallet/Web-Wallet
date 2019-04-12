/* eslint-disable */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const webpack = require('webpack');
const babelConfig = require('./babel.config.json');
const config = require('../src/config.js');

module.exports = {
  mode: 'production',
<<<<<<< HEAD
  entry: resolve(__dirname, '..', 'src/app.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build/static/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: babelConfig.presets,
          plugins: babelConfig.plugins
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              }
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|otf)$/,
        use: [
          'url-loader'
        ]
      }, {
        test: /\.(less|js)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: '\@@CDN@@',
              replace: config.prodCDN,
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      cache: true
    })
  ],
  target: 'web'
};
=======
  // optimization: {
    // minimizer: [
      // new UglifyJsPlugin({
        // cache: true,
        // parallel: true,
      // }),
      // new OptimizeCSSAssetsPlugin({}),
    // ]
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    // new UglifyJsPlugin({
      // cache: true,
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'bundle.css',
    // }),
  ]
});
>>>>>>> 246edb2f1f018431494706a3b1e6898d608c6d6a
