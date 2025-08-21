import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss()],
  server: {
    hmr: {
      overlay: true,
    },
    proxy: {
      '/api' : {
        target : 'http://localhost:3001',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

