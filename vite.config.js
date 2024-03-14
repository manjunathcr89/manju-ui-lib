import { resolve } from "path";
import { defineConfig } from "vite";
import { readdirSync } from "fs";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "manju-ui-lib",
      fileName: "index",
      formats: ["es"], // Specify ES module format
    },
    rollupOptions: {
      input: {
        ...readdirSync("./src/components")
          .filter((dir) => dir !== "index.js")
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
        .filter((dir) => dir !== "index.js")
        .map((dir) => `./src/components/${dir}/index.js`),
    ],
  },
});
