// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        favicons({
            masterPicture: "./src/images/favicon.svg",
            appName: "Eric Wesolick: Portfolio",
            appDescription:
                "Portfolio for Eric Wesolick, Communications student at the University of Mary (Bismarck, ND)",
            appShortName: "Eric Wesolick",
            background: "#e0e1dd",
            theme_color: "#415a77",
            manifestMaskable: "./src/images/maskable_icon.png",
        }),
    ],
    site: "https://www.ericwesolick.com",
    output: "static",
    adapter: vercel({}),
});
