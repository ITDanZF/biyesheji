/**
 * @description 用户 router
 * @author 小玉
 */


const router = require('koa-router')()


const { register, login, alterUserInfo, getUserInfo } = require('../../../controller/forward/userController')
const { SuccessModel }  =require('../../../model/resModel')
router.prefix('/api/user')
 

router.post('/login', async (ctx, next) => {
  const { tel, paw } = ctx.request.body

  const resToken = await login({tel, paw})
  ctx.body = resToken
})


router.post('/register', async (ctx, next) => {
  const {tel, paw} = ctx.request.body
  await register({tel, paw})
  console.log(tel, paw);
  ctx.body = new SuccessModel('注册成功')
  
})

/**
 * @description 更新用户信息
 * @author 小玉
 */
router.post('/updateUser', async(ctx, next) => {
  const {userName, gender, picture, city, phone}  = ctx.request.body
  ctx.body = await alterUserInfo({userName, gender, picture, city, phone})

})

// router.post('/delUser', async (ctx, next) => {
//   const {phone}  = ctx.request.body
//   await delUserInfo(phone)
// })


router.get('/getUserInfo', async(ctx, next) => {
  const {tel} = ctx.query
  ctx.body = await getUserInfo(tel)
})
module.exports = router