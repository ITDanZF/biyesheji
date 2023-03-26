/**
 * @description 图片 service
 * @author 小玉
 */

const { Pic }  = require('../db/model/index')
/**
 * @description 查询
 * @author 小玉
 */
async function selectPic() {
  const res = await Pic.findAndCountAll()

  const resArr = res.rows.map(item => item.dataValues)
 
  return resArr
}

/**
 * @description 查询
 * @author 小玉
 */
async function selectPicById(id) {
  const res = await Pic.findOne({
    where:{
      id
    }
  })
  const resArr = res.dataValues

  return resArr
}

/**
 * @description 更新
 * @author 小玉
 */
async function updatePic() {
  
}

/**
 * @description 创建
 * @author 小玉
 */
async function createPic() {
  
}

/**
 * @description 删除
 * @author 小玉
 */
async function deletePic() {
  
}
module.exports = {
  selectPic,
  selectPicById,
  updatePic,
  createPic,
  deletePic
}


