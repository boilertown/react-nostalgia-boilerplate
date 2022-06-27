const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/app.tsx'),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, '../src/assets/static/robots.txt'),
        path.resolve(__dirname, '../src/assets/images/favicon.ico'),
        {
          from: path.resolve(__dirname, '../src/assets/css'),
          to: 'css',
        },
      ],
    }),
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
