import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

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
                        primary: colors.gray,
                        background: colors.gray[50],
                        divider: colors.gray[800],
                        foreground: colors.gray[900],
                    },
                },
            },
        }),
    ],
} satisfies Config;
