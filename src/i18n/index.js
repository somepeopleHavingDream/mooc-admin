import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
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
