import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/": 'https://job-search-server-u2c3.onrender.com/all-jobs'
  //   }
  // },
  plugins: [react()],
})
