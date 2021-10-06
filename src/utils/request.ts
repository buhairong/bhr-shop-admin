import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router/'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

let isRefreshing = false

request.interceptors.response.use(function (response) {
  const status = response.data.status

  // 正确的情况
  if (!status || status === 200) {
    return response
  }

  // 统一处理 token 过期无效
  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      store.commit('setUser', null)
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      isRefreshing = false
    })
    return Promise.reject(response)
  }

  // 其他错误
  ElMessage.error(response.data.msg || '请求失败，请稍后重试！')
  // 手动返回一个 Promise 异常
  return Promise.reject(response.data)
  // if (response.data.status && response.data.status !== 200) {
  //   ElMessage.error(response.data.msg || '请求失败，请稍后重试！')
  //   // 手动返回一个 Promise 异常
  //   return Promise.reject(response.data)
  // }
  // return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any> (config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
