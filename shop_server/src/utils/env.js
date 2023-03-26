/**
 * @description 环境配置
 * @author 小玉
 */

const ENV = process.env.NODE_ENV

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: ENV === 'test',
  notTest: ENV !== 'test'
}