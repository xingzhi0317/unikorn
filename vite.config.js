import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 重点是加下面这行，把 '你的仓库名' 换成你真实的 GitHub 仓库名字！
  // 比如你的仓库叫 campusfit-demo，这里就写 '/campusfit-demo/'
  base: 'unikorn', 
})
