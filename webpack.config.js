const path = require('path');

module.exports = () => {
  return {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
      ]
    },
  };
};