// build.mjs
import esbuild from "esbuild";
import vue from "unplugin-vue/esbuild";

await esbuild.build({
  entryPoints: ["src/plugin.js"],
  bundle: true,
  format: "iife",
  outfile: "dist/plugin.js",
  plugins: [vue()],
});