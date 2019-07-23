const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HTMLWebpackPlugin = require('html-webpack-plugin');

const optimization = require('./optimization');

const { url, manifest: { seed }, getPaths } = require('../src/config/variables');

module.exports = {
  entry: {
    app: ['babel-polyfill', './client.js', ],
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
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
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(svg|png|jpg|jpeg|gif|ico|webp)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
      { test: /\.md$/, exclude: /node_modules/, use: { loader: 'raw-loader' } },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../_dist/bundle.html`),
    }),
    new Visualizer({
      filename: './visualizer.html',
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      seed,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new RobotstxtPlugin(),
    new SitemapPlugin(url, getPaths(), {
      skipGzip: true
    }),
  ],
  // optimization,
  target: 'web',
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorPluginOptions: {
        preset: [ 'default', { discardComments: { removeAll: true } } ],
      },
    }),
    new HTMLWebpackPlugin({
      template: 'templates/client.html',
    }),
  ]
};