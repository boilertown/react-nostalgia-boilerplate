const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        /**
         * Apply Type-safety at build time.
         *
         * @see https://evanlouie.github.io/posts/typescript-babel-preset-typescript-ts-loader
         */
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, '../build'),
    hot: true,
    open: true,
    client: {
      logging: 'none',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.ejs'),
    }),
  ],
  devtool: 'eval-cheap-source-map',
  stats: 'minimal',
});
