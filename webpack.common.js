require('dotenv').config();
const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let apiHost;

let setupAPI = function () {
   if (process.env.NODE_ENV === 'development') {
      apiHost = JSON.stringify('/api');
   } else {
      apiHost = JSON.stringify('/api');
   }
};

setupAPI();

module.exports = {
   entry: `${path.join(__dirname, '/client/src')}/index.jsx`,
   output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new webpack.DefinePlugin({
         __API__: apiHost,
      }),
      new HtmlWebpackPlugin({
         title: 'Portfolio',
         template: 'template.html',
         favicon: './favicon.ico',
      }),
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin(),
   ],
};
