import {
  defineConfig, loadEnv,
} from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'
// Start of Selection
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react(), viteTsconfigPaths()],
    server: {
      open: true, // Open the browser when the dev server starts
      port: 3000,
    },
    // test: {
    //   globals: true,
    //   environment: 'jsdom',
    // },
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  }
})

// export default defineConfig({
//   base: '/',
//   plugins: [react(), viteTsconfigPaths()],
//   server: {
//     open: true, // Open the browser when the dev server starts
//     port: 3000,
//   },
//   // test: {
//   //   globals: true,
//   //   environment: 'jsdom',
//   // },
//   resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
// })