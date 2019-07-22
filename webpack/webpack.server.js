const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: ['./server.js' ],
  },
  output: {
    path: path.resolve(__dirname, '../functions'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(svg|png|jpg|jpeg|gif|ico|webp)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
    ],
  },
  target: 'node',
  externals: nodeExternals(),
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'templates/server.html', to: 'templates/server.html' },
      { from: 'posts', to: 'posts' },
    ]),
  ],
};