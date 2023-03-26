import Router from '@koa/router'
import { tokenRequired } from '../../middleware/user.middleware'
import { validateRegisterUserInfo, validateLoginUserInfo } from "../../middleware/userLogin.middleware";
import UserController from "../../controller/user.controller";

const router = new Router({
    prefix: '/user'
})
router.post(
    '/login',
    validateLoginUserInfo,
    UserController.login
)

router.post(
    '/register',
    validateRegisterUserInfo,
    UserController.register
)
export default router.routes()