import { defineConfig } from "vite";
import { builtinModules } from "module";

// https://vitejs.dev/config
export default defineConfig({
    build: {
        rollupOptions: {
            external: ['electron', ...builtinModules],
        }
    }
});
