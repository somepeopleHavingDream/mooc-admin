import request from '@/utils/request'

/**
 * 获取项目功能
 * @returns 项目功能数据
 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}
