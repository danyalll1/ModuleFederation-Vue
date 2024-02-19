import { createApp } from 'vue'
import './style.css'
import App from './RemoteAuth.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()


app
    .use(pinia)
    .mount('#appAuth')
