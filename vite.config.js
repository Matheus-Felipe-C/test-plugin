// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    {
      // Rollup always outputs `var <name> = (() => { ... })();` for IIFE.
      // This plugin strips that wrapper and replaces it with a plain arrow IIFE.
      name: "strip-iife-assignment",
      generateBundle(options, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === "chunk") {
            // Remove `var plugin = ` from the front and the trailing `;`
            chunk.code = chunk.code
              .replace(/^var \w+ = /, "")
              .replace(/;$/, "");
          }
        }
      },
    },
  ],
  // build config removed — production bundling is handled by build.mjs (esbuild)
});