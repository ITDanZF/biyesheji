const router = require('koa-router')()

const { getAllGoodType,
getAllType } = require('../../../controller/forward/categoryController')
router.prefix('/api/category')
router.get('/getAllTypeGoods', async(ctx, next) => {
  ctx.body  = await getAllGoodType()
})


router.get('/getAllType', async(ctx, next) => {
  ctx.body  = await getAllType()
})


module.exports = router