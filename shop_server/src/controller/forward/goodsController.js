/**
 * @description 商品 controller
 * @author 小玉
 */

const { selectBargains } = require('../../service/bargainsService')
const { selectGoods, selectGoodBy } = require('../../service/goodsService')
const { selectPic, selectPicById } = require('../../service/picService')
const path = require('path')
const { SuccessModel } = require('../../model/resModel')
const { selectCollectBy } = require('../../service/collectService')
const { selectRatingsBy } = require('../../service/ratingsService')
const { selectUserInfoBy } = require('../../service/userService')
const { formatDate } = require('../../utils/formatDate')


/**
 * @description 获取商品信息
 * @author 小玉
 */
async function getGoodsList({
  page, count
}) {

 const resBargain =  await selectBargains()
 const resGood =  await selectGoods({
  page, count
 })
 const resPic = await selectPic()
 
 const res = resGood.map(itemGood => {
       resBargain.map( itemBar => {
       if (itemGood.bargain_id === itemBar.id) {
         itemGood.bargins = itemBar
       }
      })    
      resPic.map(itemPic => {
        if (itemPic.goodId === itemGood.id) {
          itemGood.image = `${process.env.BASE_URL}:${process.env.PORT}/images/${itemPic.image}`
        }
      })
      return itemGood
 })
 return new SuccessModel(res, '查询成功')
}

async function getGoodDetails({good_id, user_id}) {

  const resGood = await selectGoodBy({ 
    good_id
  })
  
  const resCollect = await selectCollectBy({
    user_id
  })

  const resRatings = await selectRatingsBy({
    user_id,
    good_id
  })

  if(resRatings.length) {
    let image = []
  image.push(resRatings[0].pic_id_1)
  // image.push(resRatings[0].pic_id_2)
  // image.push(resRatings[0].pic_id_3)
  // image.push(resRatings[0].pic_id_4)

  const res = await Promise.all(image.map(async item => {
    let res = await selectPicById(item)
    return process.env.BASE_URL + ':' + process.env.PORT + '/images/' + res.image
  }))


  const userInfo = await selectUserInfoBy({
    user_id: resRatings[0].user_id
  })
      console.log(res, '[[[[[[[[[[[[[[[[[[[[[[[[')


  resRatings[0].image = res
  resRatings[0].user = userInfo.dataValues
  resRatings[0].createTime = formatDate(resRatings[0].createTime)

  }

  return new SuccessModel({
    Goods: resGood,
    collect: resCollect,
    rating: resRatings
  }, '查询成功')
}
module.exports = {
  getGoodsList,
  getGoodDetails
}