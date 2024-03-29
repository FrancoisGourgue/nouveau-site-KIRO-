'use strict';

// entryMap is an object containing all entrypoints (files under ./src/pages)
const fs = require('fs');
const entryMap = {};
fs.readdirSync('./src/pages/')
  .filter((file) => {
    return file.match(/.*\.(j|t)sx?$/);
  })
  .forEach((file) => {
    entryMap[file.replace(/\.(j|t)sx?$/, '')] = './src/pages/' + file;
  });

module.exports = (env) => {
  return {
    devtool: 'eval-source-map',
    mode: env.mode,
    entry: entryMap,
    resolve: {
      modules: [__dirname, 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
      path: '/front/',
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.json' },
        },
        { test: /\.jsx?$/, loader: 'babel-loader' },
        {
          test: /\.(sass|css)$/,
          use: ['style-loader', 'css-loader']
        }
      ],
    },
  };
};