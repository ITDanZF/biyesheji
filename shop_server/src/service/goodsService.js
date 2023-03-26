/**
 * @description 商品 service
 * @author 小玉
 */


const { Goods }  = require('../db/model/index')
/**
 * @description 查询
 * @author 小玉
 */
async function selectGoods({
  page,count
}) {
  const res = await Goods.findAndCountAll({
    limit: count,
    offset: count * page,
  })
  const resArr = res.rows.map(item => item.dataValues)
  return resArr
}

async function selectGoodsAll() {
  const res = await Goods.findAndCountAll()
  const resArr = res.rows.map(item => item.dataValues)
  return resArr
}

/**
 * @description 查询商品
 * @param {*} param0 
 * @returns 
 */
async function selectGoodBy({
  good_id
}) {
   const res = await Goods.findAndCountAll({
      where:{
        id:good_id
      }
    })

    return res.rows.map(item => item.dataValues)
}


/**
 * @description 更新
 * @author 小玉
 */
async function updateGoods() {
  // const res = await Goods.update()
}

/**
 * @description 创建
 * @author 小玉
 */
async function createGoods() {
  
}

/**
 * @description 删除
 * @author 小玉
 */
async function deleteGoods() {
  
}
module.exports = {
  selectGoods,
  selectGoodBy,
  updateGoods,
  createGoods,
  selectGoodsAll,
  deleteGoods
}


