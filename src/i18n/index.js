import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  // 使用 composition api
  legacy: false,
  // 使用全局 t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
