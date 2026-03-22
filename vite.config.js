import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Fallback to index.html for SPA routing
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  server: {
    historyApiFallback: true,
  },
})
