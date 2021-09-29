import axios, { AxiosRequestConfig } from 'axios'

interface ResponseData<T = any> {
  status: number
  msg: string
  data: T
}

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误,比如 token 过期无效、服务端异常等
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any> (config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data as ResponseData<T>
  })
}
