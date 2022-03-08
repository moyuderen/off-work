import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import setupElementPlus from './plugins/element-plus'

const app = createApp(App)

setupElementPlus(app)
app.use(router)
app.mount('#app')

export default app
