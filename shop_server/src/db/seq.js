const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../config/db')
const { host, user, password, database } = MYSQL_CONF
const conf = {
  host: host,
  dialect: 'mysql'
}

// 数据库名、账户名、密码
const seq = new Sequelize(database, user, password, conf)

module.exports = seq