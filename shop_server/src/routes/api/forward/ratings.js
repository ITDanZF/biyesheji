const router = require('koa-router')()
const { addRatings, addRatingsPic } = require('../../../controller/forward/ratingsController')
router.prefix('/api/ratings')


router.post('/addRatings', async(ctx, next) => {
  const responData = ctx.request.body
  ctx.body = await addRatings(responData)
})


router.post('/addRatingsPic', async(ctx, next) => {
  const res = ctx.request.body
  ctx.body = await addRatingsPic(res)
  console.log(res);
})

module.exports = router