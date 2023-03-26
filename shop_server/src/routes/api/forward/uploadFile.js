const router = require('koa-router')()
const { addPic } = require('../../../controller/forward/uploadFileController')
router.prefix('/api/uploadFile')

router.post('/image', async(ctx, next) => {
  const items = ctx.request.files
  console.log(items)
    const res = await Promise.all(  Object.keys(items).map(async item => {
    return await addPic({
      image: items[item].newFilename + '.jpg',
      filepath: items[item].filepath,
      fileName: item.newFilename
    })
  }))
  ctx.body = res
})
module.exports = router
