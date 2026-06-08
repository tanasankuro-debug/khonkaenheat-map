import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['leaflet', 'react-leaflet'],
    exclude: ['@maptiler/sdk', '@maptiler/weather'],
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
})
