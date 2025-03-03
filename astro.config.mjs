// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'dist',
  build: {
    format: 'directory' // Ensures /about/ becomes /about/index.html instead of about.html
  }
});
