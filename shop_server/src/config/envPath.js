/**
 * @description 环境变量路径配置
 * @author 小玉
 */

const path  = require('path')

const envConfigPath = {
  development: path.resolve(__dirname, '../../.env'), // 开发环境配置
  test: path.resolve(__dirname, './env/.env.test'), // 测试环境配置
  production: path.resolve(__dirname, './env/.env.prod'), // 正式环境配置
};

module.exports = {
  envConfigPath
}