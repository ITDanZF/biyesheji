import {TokenUserInfo} from '../dto/user.dto'
import jwt from 'jsonwebtoken'
import SECRET_KEY from '../constant/secret-key.constants'
import { sign } from "jsonwebtoken"

export const token2UserInfo =  (token: string): any => {
  if (!token) return null
  return jwt.verify(token, SECRET_KEY.CRYPTO_SECRET_KEY)
}

export const getToken = (dto: TokenUserInfo, time: string = '2h'): string => {
  const {nick, mobile} = dto
  return sign({
      nick, mobile
  }, SECRET_KEY.CRYPTO_SECRET_KEY, {
    expiresIn: time
  })
}
