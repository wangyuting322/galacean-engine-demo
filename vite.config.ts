import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'], // 自动引入vue、vue-router、pinia
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  server: {
    host: '192.168.2.141'
  }
})
