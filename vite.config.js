import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild:{
  },
//   build:{
//     rollupOptions:{
//         input:'./src/index.jsx'
//     }
//   }
})