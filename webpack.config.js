const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)/i,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
