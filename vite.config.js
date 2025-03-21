import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Huvudmappen (där index.html ligger)
  build: {
    outDir: 'dist', // Mappen där den färdiga appen sparas
    emptyOutDir: true, // Rensar dist-mappen vid varje bygge
  },
  server: {
    open: true, // Öppnar webbläsaren automatiskt vid start
  },
});
