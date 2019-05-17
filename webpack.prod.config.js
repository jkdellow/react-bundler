const webpack = require('webpack');

module.exports = {
  entry:  './wrapper.js',
  output: {
      libraryTarget: 'var',
      library: 'showEvent',
      path:     'builds',
      filename: 'event-tile-min.js',
  },
  module: {
      loaders: [
          {
              test:   /\.js/,
              loader: 'babel',
              include: __dirname,
          }
      ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
