import { createApp } from 'vue'
import App from './App.vue'
import router from './router/'
import { store, key } from './store'
import ElementPlus from './plugins/element-plus'
import './styles/index.scss'

// createApp(App)
//   .use(router)
//   .use(store, key)
//   .use(ElementPlus)
//   .mount('#app')

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(ElementPlus)

// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
