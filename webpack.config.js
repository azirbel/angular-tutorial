var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './app/module.js',
    // Common libraries used by all modules, which don't change often. These
    // will be merged into an external.js file, which will be included by each
    // of the modules.
    external: [
      'lodash',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'app'),
    filename: '[name].js',
    sourceMapFilename: '[file].map.json',
  },

  module: {
    loaders: [
      // general
      { test: /\.js$/,
        loaders: ['ng-annotate?regexp=^.?angular.*$', 'babel?presets[]=es2015&presets[]=stage-1'],
        exclude: /node_modules/ },
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.less$/, loaders: ['style', 'css', 'postcss', 'less'] },
    ]
  },

  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

  resolve: {
    extensions: [ '', '.js', '.less' ],
    modulesDirectories: [
      './node_modules',
    ],
    root: path.resolve(__dirname, 'app'),
  },
};
