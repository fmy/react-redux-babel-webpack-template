import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: [
    './src/index.js',
    './src/index.html',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader?cacheDirectory'],
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src'),
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  devServer: {
    contentBase: 'dist',
  },
};
