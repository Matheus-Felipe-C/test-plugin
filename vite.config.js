// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
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
  build: {
    outDir: "dist",
    lib: {
      entry: "src/plugin.js",
      formats: ["iife"],
      name: "plugin",
      fileName: () => "plugin.js",
    },
    minify: false,
  },
});