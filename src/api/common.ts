// 公共基础接口
import request from '@/utils/request'
import { ILoginInfo, ILoginReq, ILoginRes } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    responseType: 'blob',
    params: {
      stamp: Date.now()
    }
  })
}

export const login = (data: ILoginReq) => {
  return request<ILoginRes>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}

export const logout = () => {
  return request<ILoginRes>({
    method: 'POST',
    url: '/admin/logout'
  })
}
