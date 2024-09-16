/**
 * 是否为外部资源
 * @param {*} path 路径
 * @returns 是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:\tel:)/.test(path)
}
