import { resolve } from "path";
import { defineConfig } from "vite";
import { readdirSync } from "fs";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "manju-ui-lib",
      fileName: "index",
      formats: ["es"],
      external: [/\.css$/],
    },
    rollupOptions: {
      input: {
        ...readdirSync("./src/components")
          .filter((dir) => dir !== "index.js" && dir !== ".DS_Store") // .DS_Store is Specific to macOS
          .reduce((entries, dir) => {
            entries[dir] = resolve(__dirname, `src/components/${dir}/index.js`);
            return entries;
          }, {}),
      },
      output: {
        entryFileNames: "[name]/index.mjs",
        chunkFileNames: "[name]/index.mjs",
      },
    },
  },
  optimizeDeps: {
    include: [
      ...readdirSync("./src/components")
        .filter((dir) => dir !== "index.js" && dir !== ".DS_Store")
        .map((dir) => `./src/components/${dir}/index.js`),
    ],
  },
});
