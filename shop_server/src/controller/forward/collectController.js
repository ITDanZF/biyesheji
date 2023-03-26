const { SuccessModel } = require('../../model/resModel');
const { selectCollectBy, updateCollectBy } = require('../../service/collectService')

async function changeStar({
  user_id, goods_id
}) {
  const resStar = await selectCollectBy({
    user_id, goods_id
  })
  const flagNum = resStar[0].flag
  if (flagNum === 1) {
    await updateCollectBy({
      user_id, goods_id, flag: 0
    })
  } else {
    await updateCollectBy({
      user_id, goods_id, flag: 1
    })
  }
  return new SuccessModel(resStar)
}

module.exports = {
  changeStar
}