import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: 'https://visionary-axolotl-5af3e5.netlify.app/',
  plugins: [react(), tailwindcss()],
});
