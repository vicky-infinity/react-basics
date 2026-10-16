import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/ollama': {
          target: 'https://ollama.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/ollama/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyRequest) => {
              proxyRequest.setHeader('Authorization', `Bearer ${env.VITE_APIKEY}`);
            });
          },
        },
      },
    },
  };
});