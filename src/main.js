import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
installElementPlus(app)
app.mount('#app')
