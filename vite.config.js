import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRUCIAL FOR VERCEL DEPLOYMENTS: Ensures assets resolve cleanly from the root URL
  base: '/',
});