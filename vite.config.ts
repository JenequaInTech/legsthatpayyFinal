import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
      },
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.the-odds-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        headers: {
          'x-api-key': process.env.VITE_API_KEY,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})