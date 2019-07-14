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