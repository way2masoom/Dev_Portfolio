import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Added a path alias for easier imports in the project
import path from 'path'
import { fileURLToPath } from 'url'

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url) // Get the current file's absolute path
const __dirname = path.dirname(__filename) // Get the current directory path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  // Configure path aliases
  resolve: {
    alias: {
      // Allows importing files using "@"
      // Example:
      // import Hero from '@/components/Hero'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
