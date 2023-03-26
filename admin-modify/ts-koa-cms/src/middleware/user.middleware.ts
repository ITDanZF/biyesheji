import { Context, Next } from 'koa'
import HttpStatusCode from '../constant/http-code.constants'
import { ApiException } from '../exception/api.exception'
import { token2UserInfo } from '../util/user.utils'

export const tokenRequired = async (ctx: Context, next: Next) => {
  const token = ctx.headers['x-token'] as string ?? ctx.cookies.get('x-token')
  if (!token) {
    throw new ApiException(HttpStatusCode.UNAUTHORIZED, 'require login')
  }

  const userinfo = await token2UserInfo(token)
  if (!userinfo) {
    ctx.throw(HttpStatusCode.INTERNAL_SERVER_ERROR)
  }

  ctx.userinfo = userinfo

  await next()
}
