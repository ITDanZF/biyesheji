const { createPic, updatePic } = require('../../service/uploadFileService')
const { formatDate } = require('../../utils/formatDate')
const { SuccessModel }  = require('../../model/resModel')
const fse = require('fs-extra')
const path = require('path')

async function addPic({
  image, goodId, filepath,fileName
}) {
  let time = new Date()
  const resData = await createPic({
    image, goodId
  })
  console.log(resData)
  const url = process.env.BASE_URL + ':' + process.env.PORT + '/' + 'images/' + resData.image
  const dest = path.join(__dirname, '../../public/images', resData.image)
  await fse.move(filepath, dest)
  return  {
    pic_id: resData.id,
    url,
    name:fileName
  }
}

async function updatePic_Goods(goods_id, id) {
  await updatePic(goods_id, id)
}

module.exports = {
  addPic,
  updatePic_Goods
}
