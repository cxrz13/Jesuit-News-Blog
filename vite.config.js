import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, ''), // Adjust 'src' if your index.html is in a different directory
  publicDir: '', // Adjust 'public' if your index.html is in a different directory
})


