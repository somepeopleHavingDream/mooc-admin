import dayjs from 'dayjs'

const dateFilter = (val, format = 'YYYY-MM-DD') => {
  console.log('val', val)
  console.log(1)
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
