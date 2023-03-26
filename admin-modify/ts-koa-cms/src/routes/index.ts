import Router from '@koa/router'
import ApiRoutes from './api/index'

const router = new Router()

// catch error
// router.use('/', () => {

// })

// register /admin routes
// routes.use('/admin', AdminRoutes)

// register /api routes
router.use('', ApiRoutes)

export default router
