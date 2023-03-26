const { Good_type, Goods }  = require('../db/model/index')

async function selectAllType() {
  const res = await Good_type.findAndCountAll()
  const resArr = res.rows.map(item => item.dataValues)
  return resArr
}
module.exports = {
  selectAllType
}