import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.BACKEND_URL': JSON.stringify(env.BACKEND_URL),
      'process.env.GTAG_ID': JSON.stringify(env.GTAG_ID),
    },
    plugins: [react()],
  }
}
)
