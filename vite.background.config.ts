import type { UserConfig } from 'vite'

export default {
  build: {
    rollupOptions: {
      input: 'src/service-worker.ts',
      output: {
        entryFileNames: 'service-worker.js',
        dir: 'dist',
        format: 'iife',
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
    lib: undefined,
  },
} satisfies UserConfig