import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' membuat hasil build bisa dibuka dari folder mana pun
// (GitHub Pages dengan sub-path, Netlify, Vercel, dll).
export default defineConfig({
  base: './',
  plugins: [react()],
});
