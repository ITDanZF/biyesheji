/**
 * @description 数据库配置文件
 * @author 玉
 */

let MYSQL_CONF = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}


module.exports = {
  MYSQL_CONF
}