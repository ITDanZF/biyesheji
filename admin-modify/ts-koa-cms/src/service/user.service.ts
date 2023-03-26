import { isEmpty } from 'lodash'
import HttpStatusCode from '../constant/http-code.constants'
import { ApiException } from '../exception/api.exception'
import User from '../models/user.model'
import {TokenUserInfo} from "../dto/user.dto";

class UserService {
    /**
     * user login
     * @param dto
     */
    async createUser (dto: TokenUserInfo) {
        const { nick, mobile, password } = dto

        const user_exist = await User.findOne({
            where: {
                mobile
            }
        })
        if (!isEmpty(user_exist)) {
            throw new ApiException(HttpStatusCode.BAD_REQUEST, 'user has already exist!')
        }

        await User.create({
            nick,
            mobile,
            password
        })
        return true
    }

    /**
     * 获取用户信息
     * @param dto
     */
    async getUserInfo (mobile: string) {
        return await User.findOne({
            where: {
                mobile
            }
        })
    }

}

export default new UserService()