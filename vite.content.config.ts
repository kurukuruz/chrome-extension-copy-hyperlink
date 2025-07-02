import type { UserConfig } from "vite";

export default {
  build: {
    rollupOptions: {
      input: "src/content.ts",
      output: {
        entryFileNames: "content.js",
        dir: "dist",
        format: "iife",
      },
    },
    outDir: "dist",
    emptyOutDir: false,
    lib: undefined,
  },
} satisfies UserConfig;
