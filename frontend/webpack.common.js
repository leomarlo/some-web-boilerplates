const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }      
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv({
      path: './frontend.env'
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_DEVELOPMENT_MODE': JSON.stringify(process.env.REACT_APP_DEVELOPMENT_MODE),
      'process.env.REACT_APP_DOCKERIZED': JSON.stringify(process.env.REACT_APP_DOCKERIZED),
    })
  ]
    
};
