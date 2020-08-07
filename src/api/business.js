import request from '@/utils/request'

export function getUserDetail() {
  return request({
    url: '/user_detail/',
    method: 'get'
  })
}
