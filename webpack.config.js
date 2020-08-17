const path = require('path');
let LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  watch: true,
  mode: 'production',
  entry: {
    index: './src/index.js',
    test: './src/test.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new LiveReloadPlugin(),
  ],
};
