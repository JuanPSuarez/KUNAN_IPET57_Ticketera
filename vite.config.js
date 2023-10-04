import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ...

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`, // Ruta a tu archivo de estilos de Bootstrap
      },
    },
  },
});
