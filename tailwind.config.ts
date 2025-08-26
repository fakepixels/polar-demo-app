import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
} satisfies Config;