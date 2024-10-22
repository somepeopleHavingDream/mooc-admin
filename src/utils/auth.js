import { TIMESTAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

/**
 * 获取时间戳
 */
export function getTimestamp() {
  return getItem(TIMESTAMP)
}

/**
 * 设置时间戳
 */
export function setTimestamp() {
  setItem(TIMESTAMP, Date.now())
}

/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now()
  // 缓存时间
  const timestamp = getTimestamp()

  return currentTime - timestamp > TOKEN_TIMEOUT_VALUE
}
