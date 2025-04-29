import type { Config } from "tailwindcss";



const config: Config = {
    important: true,

    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/lib/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            spacing: {
                "0": "0px",
                "1": "4px", // XXS
                "2": "8px", // XS
                "3": "12px", // SM
                "4": "16px", // MD
                "5": "20px", // LG
                "6": "24px", // XL
                "8": "32px", // XXL
                "10": "40px", // 3XL
                "12": "48px", // 4XL
                "16": "64px", // 5XL
                "20": "80px", // 6XL
                "24": "96px" // 7XL
            },

            colors: {

                white: 'var(--white)',
                neutral: {
                    "gray-100": 'var(--gray-100)',
                    "gray-200": 'var(--gray-200)',
                    "gray-300": 'var(--gray-300)',
                    "gray-400": 'var(--gray-400)',
                    "gray-500": 'var(--gray-500)',
                    "gray-600": 'var(--gray-600)',
                    "gray-700": 'var(--gray-700)',
                    "gray-800": 'var(--gray-800)',
                },

                // Primary Colors
                primary: {
                    DEFAULT: 'var(--primary)',
                    surface: 'var(--primary-surface)',
                    focused: 'var(--primary-focused)',
                    border: 'var(--primary-border)',
                    hover: 'var(--primary-hover)',
                    pressed: 'var(--primary-pressed)',
                },

                // System Colors
                border: "var(--border)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                muted: "var(--muted)",
                accent: "var(--accent)",
            },
        },
    },
    safelist: [
        {
            pattern: /^gap-(0|1|2|3|4|5|6|8|10|12|16|20|24)$/
        },
        {
            pattern: /^(sm:|md:|lg:|xl:|2xl:)?flex-(row|col|row-reverse|col-reverse)$/,
        },
    ],
    plugins: []
} satisfies Config;

export default config;
