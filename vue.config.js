const path = require('path')
const webpack = require('webpack')

module.exports = {
  baseUrl: './',
  publicPath:"./",
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('$public', path.join(__dirname, 'public'))
  },
  configureWebpack: config => {
    config.mode = 'production'
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  },
  productionSourceMap: false,
  devServer: {
       // 设置主机地址
       host: 'localhost',
       // 设置默认端口
       port: 8080,

    proxy: {
        '/webapi': {
          target: 'www.baidu.com/webapi',
          ws: false,
          changeOrigin:true,//允许跨域
          pathRewrite:{
           '^/webapi':''
          }
        }
      }
  }
}
