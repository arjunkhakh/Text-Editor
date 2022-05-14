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
        template: './index.html'
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

      // Using our S-Worker file for this application
      new InjectManifest(
        {
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
        }
      ),
    ],

    // Getting the Rules for CSS, Images and Babel-Loader
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
