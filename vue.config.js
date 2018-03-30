module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api": ""}
      }
    }
  },
  configureWebpack: {
    output: {
      chunkFilename: '[name].js'
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
  lintOnSave: false
};
