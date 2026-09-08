import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      "debian"
    ],
    proxy: {
      '/api': {
        target: 'http://gst-backend:8090',
        // target: 'http://10.42.0.1:8090',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
