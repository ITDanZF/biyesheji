const router = require('koa-router')()
const { changeStar } = require('../../../controller/forward/collectController')
router.prefix('/api/collect')


router.post('/changeStar', async(ctx, next) => {
  const {user_id, goods_id} = ctx.request.body
  ctx.body  = await changeStar({
    user_id, goods_id
  })
})
module.exports = router