import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer(),
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        memo: true,
      },
    }),
  ],
});
