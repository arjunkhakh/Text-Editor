// Requiring My Packages and Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Exporting the web packages for the application
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Getting the HTML Plugin to go to Index.html
      new HtmlWebpackPlugin({
        template: '/index.html'
      }),

      // Creating a Manifest.json File 
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'jate',
        short_name: 'jate',
        description: 'Text Editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }
        
      ),

      // Injecting our Service Worker File for this application
      new InjectManifest(
        {
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
        }
      ),
    ],

module: {
  // CSS loaders
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      // We use babel-loader in order to use ES6.
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
        },
      },
    },
  ],
},
};
};
