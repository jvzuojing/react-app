
import { defineConfig } from 'vite';
import reactRefresh from "@vitejs/plugin-react-refresh";

const config = defineConfig({ 
    plugins: [reactRefresh()]
});

export default config;