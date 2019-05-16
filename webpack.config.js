const path = require('path');
const SRC_DIR = path.resolve(__dirname, './client/src/')
const DIST_DIR = path.resolve(__dirname, './client/dist/')

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }

      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        loaders: ['style', 'css']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}