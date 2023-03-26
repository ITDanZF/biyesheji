const router = require('koa-router')()
const { addOrder, getOrderByTel, alterOrder } = require('../../../controller/forward/orderController')
router.prefix('/api/order')

router.post('/addOrders', async(ctx, next) => {
  const items = ctx.request.body
  ctx.body = await addOrder(items)
})


router.get('/getOrders', async(ctx, next) => {
  const { tel } = ctx.request.query
  ctx.body = await getOrderByTel(tel)
})

router.post('/alterOrders', async(ctx, next) => {
  const receive = ctx.request.body
  ctx.body = await alterOrder(receive)
})

module.exports = router