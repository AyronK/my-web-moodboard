import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/my-web-moodboard/",
    server: {
        port: 8000
    },
    plugins: [react()]
});
