import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {    // to handle the proxy from App.jsx
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react()],
})
