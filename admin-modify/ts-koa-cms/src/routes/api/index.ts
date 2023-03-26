import Router from '@koa/router'
import newsUserRouters from './user'

const router = new Router({
  prefix: '/api'
})

router.use('', newsUserRouters)


export default router.routes()
