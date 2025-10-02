import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [vue()],
    server: {
      port: 3000,
      open: true
    }
  }

  if (command === 'serve') {
    // Development mode - no base path
    config.base = '/'
  } else {
    // Production mode - GitHub Pages with relative paths
    config.base = './'
  }

  return config
})