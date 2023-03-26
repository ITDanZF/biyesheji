/**
 * @description 折扣 service
 * @author 小玉
 */

const { Bargains }  = require('../db/model/index')

/**
 * @description 查询
 * @author 小玉
 */
async function selectBargains() {
  const res = await Bargains.findAndCountAll()
  const resArr = res.rows.map(item => item.dataValues)
  return resArr
}

/**
 * @description 更新
 * @author 小玉
 */
async function updateBargains() {
  
}

/**
 * @description 创建
 * @author 小玉
 */
async function createBargains() {
  
}

/**
 * @description 删除
 * @author 小玉
 */
async function deleteBargains() {
  
}

module.exports = {
  selectBargains,
  updateBargains,
  deleteBargains,
  createBargains

}


