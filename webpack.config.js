/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.join(__dirname, 'dist')

module.exports = {
  mode: process.env.mode,
  entry: path.resolve(__dirname, 'index.tsx'),
  output: {
    path: BUILD_DIR,
    filename: '[name].[contenthash].chunk.js',
    clean: true,
  },
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    watchFiles: [path.join(__dirname, 'index.html')],
    client: {
      logging: 'error',
      overlay: {
        warnings: false,
        errors: true,
        runtimeErrors: true,
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') }),
  ],
}
