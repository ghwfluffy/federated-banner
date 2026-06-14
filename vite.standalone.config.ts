import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/standalone.ts",
      name: "GhwizFederatedBannerStandalone",
      fileName: "federated-banner",
      formats: ["iife"],
    },
    outDir: "dist/browser",
  },
});
