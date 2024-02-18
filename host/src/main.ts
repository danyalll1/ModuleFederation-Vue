import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
const remoteAuth = defineAsyncComponent(() => import('remote/RemoteAuth'));
const app = createApp(App)
app
    .component('remote-auth',remoteAuth)
    .mount('#app')
