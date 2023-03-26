const { Pic, Ratings } = require('../db/model/index')

async function createPic({
  image, goodId
}) {

  let whereOpt = {}
  if (image) {
    whereOpt.image = image
  }

  if (goodId) {
    whereOpt.goodId = goodId
  }
  const pic = await Pic.create(whereOpt)
  return pic.dataValues
}

async function updatePic(goods_id, id) {
  await Pic.update({
    goodId: goods_id
  },{
    where:{
      id
    }
  })
}

module.exports = {
  createPic,
  updatePic
}