const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      popup: './src/js/popup',
      background: './src/js/background',
      content: './src/js/content',
      // devTools: './src/js/devTools',
      // options: './src/js/options',
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, './dist'),
  
    },
    module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [{
              from: './src/images',
              to: './images'
            },
            {
              from: './src/html',
              to: './html'
            },
            {
              from: './src/manifest.json',
              to: 'manifest.json'
            }
          ],
        }),
      ],
    };
  