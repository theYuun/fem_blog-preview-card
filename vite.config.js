import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  /*
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({name}) => {
          if(/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]';
          }
          return 'images/[name]-[hash][extname]';
        }
      }
    }
  },
  */
  base: '/fem_blog-preview-card/',
  plugins: [vue()],
})
