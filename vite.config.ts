import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import';

let pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      script: {
        refSugar: false
      }
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: false,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
    legacy({
      targets: ['defaults', 'chrome 58', 'android >= 6']
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
})
