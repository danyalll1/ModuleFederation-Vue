import { createApp, defineAsyncComponent } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
const remoteAuth = defineAsyncComponent(() => import('remote/RemoteAuth'));
const app = createApp(App)
const pinia = createPinia()
app
    .component('remote-auth',remoteAuth)
    app.use(pinia)
    .mount('#app')
