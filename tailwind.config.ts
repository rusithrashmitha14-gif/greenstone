import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#101210',
          secondary: '#191D19',
          card: '#1F241F',
          cardHover: '#262D26',
          elevated: '#283028',
        },
        text: {
          primary: '#F7F8F5',
          secondary: '#B6BDB3',
          muted: '#858E82',
        },
        accent: {
          DEFAULT: '#8BCF58',
          hover: '#9DE066',
          dark: '#6EA841',
          subtle: 'rgba(139, 207, 88, 0.12)',
          border: 'rgba(139, 207, 88, 0.25)',
        },
        border: {
          subtle: '#272E27',
          light: '#353E35',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        glow: '0 0 30px -5px rgba(139, 207, 88, 0.15)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
