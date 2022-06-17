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
      apiHost = JSON.stringify('');
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
            //enables webpack to handle jsx files
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            //enables webpack to handle images
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
      }),
      new MiniCssExtractPlugin(),
      //! uncomment this line to visualize webpack bundles in browser
      // new BundleAnalyzerPlugin(),
   ],
};
