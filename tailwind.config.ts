import type { Config } from "tailwindcss";
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
    			display: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
    darkMode: ["class", "class"],
    plugins: [
        // nextui({
        //     themes: {
        //         light: {
        //             colors: {
        //                 secondary: "#778da9",
        //                 primary: { DEFAULT: "#415a77", foreground: "#e0e1dd" },
        //                 background: {
        //                     DEFAULT: "#e0e1dd",
        //                     foreground: "#0d1b2a",
        //                 },
        //                 divider: "#1b263b",
        //                 foreground: "#0d1b2a",
        //             },
        //             layout: {
        //                 radius: {
        //                     small: "4px", // rounded-small
        //                     medium: "6px", // rounded-medium
        //                     large: "10px", // rounded-large
        //                 },
        //             },
        //         },
        //     },
        // }),
        require("tailwindcss-animate")
    ],
} satisfies Config;
