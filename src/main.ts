import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Toast, Dialog } from 'vant'
Dialog.setDefaultOptions({
    confirmButtonColor: '#0078ff',
})
const app = createApp(App)
app.use(Toast)
app.use(Dialog)
app.use(router).mount('#app')


