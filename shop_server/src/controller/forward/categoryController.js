const { SuccessModel } = require('../../model/resModel');
const { selectGoodsAll } = require('../../service/goodsService')
const { selectAllType } = require('../../service/goodTypeService')
const { selectPic } = require('../../service/picService')
const { selectBargains } = require('../../service/bargainsService')

async function getAllGoodType() {
  const resType = await selectAllType()
  const resGood = await selectGoodsAll()
  const resPic = await selectPic()
  const resBargains = await selectBargains()

  const resGoodBar = resGood.map(item => {
    resBargains.map(itemB => {
      if( item.bargain_id === itemB.id) {
        item.bargain = itemB.bargain
      }
    })
    return item
  })


  const resGoodPic = resGoodBar.map(item => {
    resPic.map(itemPic => {
      if (item.img_id === itemPic.id) {
        item.image = process.env.BASE_URL + ':' + process.env.PORT + "/images/" + itemPic.image
      }
    })
    return item
  })

  const res = resType.map( item => {
    item.goodArr = []
    resGoodPic.map(items => {
      if (item.id === items.type_id) {
          item.goodArr.push(items)
      } 
    })
    return item
  })


  return new SuccessModel(res)

}


async function getAllType() {
  const resType = await selectAllType()

  return new SuccessModel(resType)

}

module.exports = {
  getAllGoodType,
  getAllType
}