import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
    //reactRefresh(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  clearScreen: false,
  server: {
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-library-sample',
      formats: ['cjs', 'es'],
      fileName: (format) =>
        format === 'cjs' ? 'cjs/index.js' : 'esm/index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
