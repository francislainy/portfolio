import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
});
