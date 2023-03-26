/**
 * @description 生成token
 * @author 小玉
 */

const jwt = require('jsonwebtoken')
const { SECRET_TOKEN } = require('../config/secretKeys')


function getToken(userInfo, time) {
  token = jwt.sign(userInfo, SECRET_TOKEN, {
    expiresIn: time
  })
  return token
}

module.exports = {
  getToken
}