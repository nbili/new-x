import { defineConfig, normalizePath } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, "src"),
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-styled-components"
          // "@emotion/babel-plugin"
        ]
      },
      // jsxImportSource: "@emotion/react"
    })
  ],
  css: {
    modules: {
      generateScopedName: "[name]_[local]__[hash:base64:8]"
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  }
});
