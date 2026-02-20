import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#0B0B0D",
                    section: "#1A1A1F",
                },
                primary: {
                    DEFAULT: "#8F5AA8",
                    hover: "#A56BBF",
                    light: "#C08ED3",
                },
                text: {
                    DEFAULT: "#FFFFFF",
                    secondary: "#CFCFD4",
                },
                accent: {
                    border: "rgba(165,107,191,0.25)",
                    decorative: "rgba(165,107,191,0.15)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
