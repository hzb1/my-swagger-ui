import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'

import './assets/main.css'
// import 'element-plus/dist/index.css'

function setRem() {
  const baseSize = 16
  const scale = document.documentElement.clientWidth / 1920 // 以1920设计稿为例
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
window.addEventListener('resize', setRem)
setRem()

const app = createApp(App)
// app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
