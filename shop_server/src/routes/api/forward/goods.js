/**
 * @description 商品 route
 * @author 小玉
 */

const router = require('koa-router')()
const { getGoodsList, getGoodDetails } = require('../../../controller/forward/goodsController')
router.prefix('/api/goods')


/**
 * @description 获取所有商品列表
 * @author 小玉
 */
router.get('/getAllGoodList', async(ctx, next) => {
  const { page, count }  = ctx.query

  ctx.body = await getGoodsList({
    page: Number(page),
    count: Number(count)
  })
})


router.get('/getGoodDetails', async(ctx, next) => {
  let {id} = ctx.query

  ctx.body = await getGoodDetails({
    good_id: parseInt(id),
    user_id:ctx.user_id
  })
})


module.exports = router