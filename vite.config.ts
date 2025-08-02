/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

// __dirnameの代替定義（ESM環境）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  test: {
    projects: [
      {
        plugins: [
          storybookTest({
            configDir: path.join(__dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
