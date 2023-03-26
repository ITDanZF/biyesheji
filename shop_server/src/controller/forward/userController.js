/**
 * @description 用户 controller
 * @author 小玉
 */

const { selectUserInfo, createUser, updateUserInfo, deleteUser}  = require('../../service/userService')
const { selectUserExistFailInfo, selectUserNotExistFailInfo, incorrectPasswordFailInfo, vertifyFailInfo } = require('../../model/ErrorModel')
const { getToken }  =require('../../utils/getToken')
const { SuccessModel }  = require('../../model/resModel')
const { doCrypto } = require('../../utils/cryp')
const { User } = require('../../db/model')

/**
 * @description 注册
 * @author 小玉
 * @param {*} param0 
 * @returns 
 */
async function register({tel, paw}) {
  const res = await selectUserInfo({ tel })

  if (res !== null) {
    throw new Error(selectUserExistFailInfo)
  }
  const result = await createUser({ tel, paw })
  
  return result
}

/**
 * @description 登录
 * @author 小玉
 * @param {*} param0 
 * @returns 
 */
async function login({ tel, paw}) {

  const res = await selectUserInfo({ tel })
  if (res === null) {
    throw new Error(selectUserNotExistFailInfo)
  }
  const { phone, password, id }  = res.dataValues

  if (password !== doCrypto(paw) ) {
    throw new Error(incorrectPasswordFailInfo)
  }
  const token = getToken({
    phone,
    password,
    id
  }, '10h')
  return new SuccessModel(token, '登录成功')
}



/**
 * @description 更新用户信息
 * @author 小玉
 * @param {*} param0 
 * @returns 
 */
async function alterUserInfo({
  userName, gender, picture, city, phone
}) {

  const result = await updateUserInfo({userName, gender, picture, city}, {phone})

  // if (!result) {
  //   throw new Error(vertifyFailInfo)
  // }
  return new SuccessModel('授权成功')
}


async function delUserInfo(phone) {
  const res = await selectUser({ tel:phone })
  if (res === null) {
    throw new Error(selectUserNotExistFailInfo)
  }
  const result = await deleteUser(phone)
}


async function getUserInfo(tel) {
  const res = await selectUser({tel})
  return new SuccessModel(res.dataValues)
}

module.exports = {
  register,
  login,
  alterUserInfo,
  delUserInfo,
  getUserInfo
}
