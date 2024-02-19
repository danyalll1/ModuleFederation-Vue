import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remote',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './RemoteAuth': './src/RemoteAuth.vue',
                './remoteStore' : './src/store.ts'
            },
            shared: {
                vue:{},
                pinia:{}
            }
        })
    ],
    base: 'http://localhost:5001',
    build: {
        target:'esnext',
        minify: false,
       // target: ["chrome89", "edge89", "firefox89", "safari15"],
        cssCodeSplit: false,
        sourcemap: true,
    }
})
