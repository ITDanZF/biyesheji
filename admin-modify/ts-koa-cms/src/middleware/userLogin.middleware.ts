import { Context, Next } from 'koa'
import HttpStatusCode from '../constant/http-code.constants'
import { ApiException } from '../exception/api.exception'
import {userLoginSchema, userRegisterSchema} from '../schema/user.schema'
import { doCrypto } from "../util/crypt.utils"


export const validateRegisterUserInfo = async (ctx: Context, next: Next) => {
    const { nick, mobile, password }: any = ctx.request.body

    try {
        await userRegisterSchema.validateAsync({
            nick,
            mobile,
            password
        })
    } catch (e: any) {
        throw new ApiException(HttpStatusCode.BAD_REQUEST, e.message)
    }

    ctx.registerUsersInfo = {
        nick,
        mobile,
        password: doCrypto(password)
    }

    await next()
}
export const validateLoginUserInfo = async (ctx: Context, next: Next) => {
    const { mobile, password }: any = ctx.request.body

    try {
        await userLoginSchema.validateAsync({
            mobile,
            password
        })
    } catch (e: any) {
        throw new ApiException(HttpStatusCode.BAD_REQUEST, e.message)
    }
    ctx.loginUsersInfo = {
        mobile,
        password: doCrypto(password)
    }
    await next()
}