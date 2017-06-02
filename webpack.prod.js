const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'main': path.join(__dirname, '/src/index.js'),
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
};
