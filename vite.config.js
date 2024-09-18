// vite.config.js
// import { defineConfig } from "vite";

// export default defineConfig({
//   root: ".",
//   server: {
//     port: 5173,
//   },
// });

import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
