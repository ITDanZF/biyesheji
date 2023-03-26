const { createRatings, createRatingsPic, selectRatingsBy, updateRatingPic } = require('../../service/ratingsService')
const { selectUserInfo } = require('../../service/userService')
const { updatePic } = require('../../service/uploadFileService')
const { SuccessModel }  = require('../../model/resModel')

async function addRatings(response) {
  const tels = await response.tel
  const userInfo = await selectUserInfo({
    tel:tels
  })
  response.uid = userInfo.id
  if (response.pic_id_arr.length) {
    let goodIds = response.goods_id
    let picId = response.pic_id_arr[0]

    await updatePic(goodIds, picId)
  }
  const resData = await createRatings(response)
 return new SuccessModel(resData)
}


async function addRatingsPic({
  pic_arr, tel
}) {
  
}

module.exports = {
  addRatings,
  addRatingsPic
}