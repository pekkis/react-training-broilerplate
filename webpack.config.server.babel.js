import webpack from 'webpack';
import path from 'path';
import merge from 'merge';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import clientConf from './config.client';
import { getStyleLoader } from './src/utils/webpack';
import { List } from 'immutable';

import fs from 'fs';

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const ENV = process.env.NODE_ENV;

const PATHS = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  modules: path.resolve(__dirname, './node_modules'),
  test: path.resolve(__dirname, './test')
};

export function getPostCss() {
  return function () {
    return [autoprefixer, precss];
  }
}

export function getCommonLoaders(ENV) {
  return List([
    getStyleLoader(
      'development',
      'node',
      {
        test: /\.p?css$/,
        include: [
          PATHS.src,
        ],
        loaders: [
          'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ),
    getStyleLoader(
      'development',
      'node',
      {
        test: /\.css$/,
        include: [
          PATHS.modules,
        ],
        loaders: [
          'null-loader'
        ]
      },
    ),
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loaders: [
        'file?emitFile=false&hash=sha512&digest=hex&name=assets/[hash:base58:8].[ext]',
        'img?minimize&optimizationLevel=5&progressive=true'
      ],
      include: [
        PATHS.src
      ]
    },
    {
      test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?emitFile=false&limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      include: [
        PATHS.src,
        PATHS.modules
      ]
    },
    {
      test: /\.(json)$/,
      loader: 'json-loader',
    }
  ]);
}

const common = {

  context: __dirname,
  externals: nodeModules,
  target: "node",

  module: {
    loaders: getCommonLoaders(ENV).concat(
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          PATHS.modules,
        ]
      }
    ).toJS()
  },
  postcss: getPostCss(),
  resolve: {
    modulesDirectories: ['node_modules'],
    root: [
      PATHS.src,
    ],
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    root: PATHS.modules
  }
};

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: process.env.NODE_ENV === 'development',
    __DEVTOOLS__: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

const envs = {
  test: {
    devtool: 'inline-source-map' //just do inline source maps instead of the default
  },

  development: {
    devtool: 'cheap-module-source-map',
    entry: {
      server: './src/server.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'server.js'
    },
    plugins: plugins.concat([
    ])
  },
  production: {
    devtool: 'source-map',
    entry: {
      server: './src/server.js',
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    plugins: plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        'mangle': false,
        'compress': {
          dead_code: true,
          unsafe: false,
          unused: false,
          hoist_vars: false,
          side_effects: false,
          global_defs: {}
        }
      }),
      new webpack.NoErrorsPlugin()
    ])
  }
}

export default merge(common, envs[ENV]);
