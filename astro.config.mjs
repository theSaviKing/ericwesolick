// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind(),
        favicons({
            masterPicture: "./src/images/favicon.svg",
            appName: "Eric Wesolick's Portfolio",
            appDescription:
                "Portfolio for Eric Wesolick, Communications student at the University of Mary (Bismarck, ND)",
            appShortName: "Eric Wesolick",
            background: "#e0e1dd",
            theme_color: "#415a77",
        }),
    ],
    output: "static",
    adapter: vercel({}),
});
