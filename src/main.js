import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './permission'
import * as ElementPlusIconVue from '@element-plus/icons-vue'
// 全局属性
import installFilter from '@/filters'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
  app.component(key, component)
}

installElementPlus(app)
installIcons(app)
installFilter(app)

app.use(store).use(router).use(i18n).mount('#app')
