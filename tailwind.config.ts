import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary:'#F7F7F7',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            boxShadow: {
                innerSmall: 'inset 0 -1px 0 0 #000000',
            },
        },
    },
    plugins: [],
} satisfies Config;
