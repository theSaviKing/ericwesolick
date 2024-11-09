import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./src/**/*.{jsx,tsx,astro,html}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                display: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        secondary: "#778da9",
                        primary: { DEFAULT: "#415a77", foreground: "#e0e1dd" },
                        background: {
                            DEFAULT: "#e0e1dd",
                            foreground: "#0d1b2a",
                        },
                        divider: "#1b263b",
                        foreground: "#0d1b2a",
                    },
                    layout: {
                        radius: {
                            small: "4px", // rounded-small
                            medium: "6px", // rounded-medium
                            large: "10px", // rounded-large
                        },
                    },
                },
            },
        }),
    ],
} satisfies Config;
