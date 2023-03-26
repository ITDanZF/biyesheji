/**
 * @description token授权
 * @author 小玉
 */


const { vertifyTokenFailInfo,
  inCorrectTokenFailInfo,
  isNotTokenFailInfo } = require('../model/ErrorModel')
const jwt = require('jsonwebtoken')
const { selectUserInfo } = require('../service/userService')
const { SECRET_TOKEN }  = require('../config/secretKeys')


/**
 * @description 授权中间件
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
async function vertifyToken(ctx, next) {


  //登录注册不用授权
  const urls = ctx.url
  const index = urls.lastIndexOf('/')
  const url = urls.slice(index + 1)
  console.log(url, '[[[[[[[[[[[[[[[[[')
  if (url === 'login' || url === 'register' || url === 'image' || url ==='jpg' || url === 'png') {
    await next()
    return
  }


  const tokenStr = ctx.headers['admin_token']? 'admin_token': (ctx.headers['x-token']?'x-token':null)

  if (!tokenStr) {
    throw new Error(isNotTokenFailInfo)
  }

  let token
  token = ctx.headers[tokenStr]
  if (!token) {
    token = ctx.headers[tokenStr]
  }
  if (!token) {
    throw new Error(vertifyTokenFailInfo)
  }
  if (token) {
     const res = await parsingToken(token, SECRET_TOKEN)
     ctx.user_id = res
    //  console.log(res);
     await next()
  }
}


async function parsingToken(token, SECRET_TOKEN) {
  const decode = jwt.verify(token, SECRET_TOKEN)
  let { phone, password, id } = decode
  const res = await selectUserInfo({
    tel: phone
  })
  if (res === null) {
    throw new Error(inCorrectTokenFailInfo)
  }

  return  id
}

module.exports = {
  vertifyToken
}
