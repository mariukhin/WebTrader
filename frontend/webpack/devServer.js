const path = require('path');

module.exports = isDev => ({
  devServer: isDev
    ? {
        port: 5000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        overlay: true,
        historyApiFallback: true,
        compress: true,
      }
    : {},
});
