// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // 生产环境建议关闭，减小体积
    rollupOptions: {
      // 确保没有错误的 manualChunks 配置
    }
  },
  publicDir: 'public'
})