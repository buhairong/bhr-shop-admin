import request from '@/utils/request'
import { IListParams, Admin, AdminPostData } from './types/admin'
import { IFormData } from './types/form'

export const getAdmins = (params: IListParams) => {
  return request<{
    count: number
    list: Admin[]
  }>({
    method: 'GET',
    url: '/admin/setting/admin',
    params
  })
}

export const createAdmin = (data: AdminPostData) => {
  return request({
    method: 'POST',
    url: '/admin/setting/admin',
    data
  })
}

export const updateAdmin = (id: number, data: AdminPostData) => {
  return request({
    method: 'PUT',
    url: `/admin/setting/admin/${id}`,
    data
  })
}

export const deleteAdmin = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/admin/setting/admin/${id}`
  })
}

export const updateAdminStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/admin/setting/set_status/${id}/${status}`
  })
}

export const getRoles = () => {
  return request<IFormData>({
    method: 'GET',
    url: '/admin/setting/admin/create'
  }).then(data => {
    const roles = data.rules.find(item => item.field === 'roles')
    if (roles && roles.options) {
      return roles.options
    }
    return []
  })
}

export const getAdmin = (id: number) => {
  return request<IFormData>({
    method: 'GET',
    url: `/admin/setting/admin/${id}/edit`
  }).then(data => {
    const obj: Record<string, any> = {}
    data.rules.forEach(item => {
      obj[item.field] = item.value
    })
    return obj as AdminPostData
  })
}
