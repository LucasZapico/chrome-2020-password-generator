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
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    }, ],
  },
  plugins: [
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