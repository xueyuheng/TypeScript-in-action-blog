const merge = require('webpack-merge');
//把我们其他的三个配置文件引入进来
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')
//判断环境变量
let config = process.NODE_ENV === 'development' ? devConfig : proConfig;
//
module.exports = merge(baseConfig, config)

//merge 的作用是把两个配置文件合并
