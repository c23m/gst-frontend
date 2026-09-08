import '@/assets/styles/markdown.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

async function init() {
    if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCK === 'true') {
        const { worker } = await import('./mocks/browser')
        await worker.start()
    }

    createApp(App).use(router).mount('#app')
}

init()