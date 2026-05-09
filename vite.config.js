import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/plugin.js",
      formats: ["iife"],
      name: "plugin",
      fileName: () => "plugin.js"
    },
    rolldownOptions: {
      output: {
        footer: "",
      },
    },
    minify: false,
  }
})
