/**
 * @description 用户 service
 * @author 小玉
 */

const { User } = require('../db/model/index')
const { doCrypto }  =require('../utils/cryp')
const { transmissonFailInfo }  =require('../model/ErrorModel')


async function createUser({tel, paw}) {
  const res = await User.create({
    phone: tel,
    password:doCrypto(paw)
  })

  return res
}


async function selectUserInfo({tel}) {

  if (!tel) {
    throw new Error(transmissonFailInfo)
  }

  const res = User.findOne({
    where:{
      phone:tel
    }
  })
  return res
}

async function selectUserInfoBy({user_id}) {

  if (!user_id) {
    throw new Error(transmissonFailInfo)
  }

  const res = User.findOne({
    where:{
      id: user_id
    }
  })
  return res
}


/**
 * @description 用户信息更新
 * @author 小玉
 * @param {*} param0 
 * @param {*} param1 
 * @returns 
 */
async function updateUserInfo({
  userName, gender, picture, city
},{
  phone
}) {
  const whereOpt = {
    phone
  }
  console.log(whereOpt);
  const res = await User.update({
    userName, gender, picture, city
  }, {
    where:whereOpt
  })

  return res[0] > 0
}

async function deleteUser(phone) {
  const res = await User.destroy({
    where:{
      phone
    }
  })

  return res
}






module.exports = {
  createUser,
  selectUserInfoBy,
  selectUserInfo,
  updateUserInfo,
  deleteUser
}