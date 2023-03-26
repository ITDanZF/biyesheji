/**
 * @description 评论
 * @author 小玉
 */

const { Ratings }  = require('../db/model/index')

/**
 * @description 查询用户评论
 * @author 小玉
 * @param {*} param0 
 * @returns 
 */
async function selectRatingsBy({
  id, user_id, good_id
}) {
  let whereOpt = {}
  if (id) {
    whereOpt.id = id
  }
  if (user_id) {
    whereOpt.user_id = user_id
  }
  if (good_id) {
    whereOpt.goods_id = good_id
  }
  const ratingRes = await Ratings.findAndCountAll({
    where: whereOpt
  })

  return ratingRes.rows.map(item => item.dataValues)
}


async function createRatings(ratingsItem) {
  const result = await Ratings.create({
   user_id: ratingsItem.uid,
    rating: ratingsItem.msg,
    score: ratingsItem.star,
    createTime: ratingsItem.shijian,
    goods_id: ratingsItem.goods_id,
    pic_id_1: ratingsItem.pic_id_arr[0] || 0
  })
  return result
}

async function createRatingsPic(pic) {


 const resData = await Ratings.create(pic)
 return resData.dataValues
}

async function updateRatingPic({
  pic_id_1, pic_id_2, pic_id_3, pic_id_4, user_id
}) {
  let whereOpt = {
    user_id
  }
  let paramOpt = {}
  if (pic_id_2) {
    whereOpt.pic_id_1 = pic_id_1
    paramOpt.pic_id_2 = pic_id_2
  }

  if (pic_id_3) {
    whereOpt.pic_id_1 = pic_id_1
    whereOpt.pic_id_1 = pic_id_2
    paramOpt.pic_id_2 = pic_id_3
  }

  if (pic_id_4) {
    whereOpt.pic_id_1 = pic_id_1
    whereOpt.pic_id_1 = pic_id_2
    whereOpt.pic_id_3 = pic_id_3
    paramOpt.pic_id_4 = pic_id_4
  }

  console.log(paramOpt, whereOpt, 'lllllllllllllllllllllll');
  const resData = await Ratings.update(paramOpt, {
    where:whereOpt
  })
  return resData.dataValues
}

module.exports = {
  selectRatingsBy,
  createRatings,
  createRatingsPic,
  updateRatingPic
}