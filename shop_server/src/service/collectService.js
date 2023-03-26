/**
 * @description 商品 service
 * @author 小玉
 */


const { Collect }  = require('../db/model/index')

/**
 * @description 查询收藏
 * @author 小玉
 * @param {*} param0 
 * @returns 
 */
async function selectCollectBy({
  user_id, goods_id
}) {
  let whereOpt = {}

  if (user_id) {
    whereOpt.user_id = user_id
  }

  if (goods_id) {
    whereOpt.goods_id = goods_id
  }
  
  const collRes = await Collect.findAndCountAll({
    where: whereOpt
  })


  return collRes.rows.map(item => item.dataValues)
}


async function updateCollectBy({
  user_id, goods_id, flag
}) {
  let whereOpt = {}

  if (user_id) {
    whereOpt.user_id = user_id
  }

  if (goods_id) {
    whereOpt.goods_id = goods_id
  }
  const collRes = await Collect.update({
    flag
  },{
    where: whereOpt
  })

  return collRes
}



module.exports = {
  selectCollectBy,
  updateCollectBy
}