import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            ["process.env." + key]: `"${val}"`,
        };
    }, {});

    return {
        define: envWithProcessPrefix,
        plugins: [
            // Added to .storybook/webpack.config.js as well
            // as a module `moduleName.default()`
            tsconfigPaths(),
            react({
                exclude: ["**/node_modules/**", "**/vite.config.ts"],
                include: [
                    "./vite.config.ts",
                    "@/**/*.tsx",
                    "@/**/*.ts",
                    "@/**/*.jsx",
                    "@/**/*.js",
                    "src/**/*.tsx",
                    "src/**/*.ts",
                    "src/**/*.jsx",
                    "src/**/*.js",
                ],
            }),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                },
            }),
        ],
    };
});
