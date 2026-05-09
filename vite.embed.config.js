// vite.embed.config.js
// Run with: npx vite build --config vite.embed.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readFileSync, writeFileSync } from "fs";

export default defineConfig({
  plugins: [
    vue(),
    {
      // After the build, wrap the output in a full HTML document
      // and write it as a JS module that exports the HTML string.
      closeBundle() {
        const js  = readFileSync("dist-embed/assets/index.js",  "utf8");
        const css = readFileSync("dist-embed/assets/index.css", "utf8");

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>${css}</style>
</head>
<body>
  <div id="app"></div>
  <script type="module">${js}<\/script>
</body>
</html>`;

        // Export as a JS module so the plugin can import it
        writeFileSync(
          "src/counter-embed.js",
          `export const counterHTML = ${JSON.stringify(html)};\n`
        );

        console.log("✓ counter-embed.js written");
      },
    },
  ],
  build: {
    outDir: "dist-embed",
    rollupOptions: {
      input: "src/main.js",       // standard Svelte entry point
      output: {
        entryFileNames: "assets/index.js",
        assetFileNames: "assets/index.css",
      },
    },
  },
});