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
          primary: '#FAFCF8',
          secondary: '#F0F5ED',
          card: '#FFFFFF',
          cardHover: '#F6FAF3',
          elevated: '#E8F0E4',
          dark: '#132317',
          darkCard: '#1A3020',
        },
        text: {
          primary: '#172619',
          secondary: '#4A584A',
          muted: '#6F806F',
        },
        accent: {
          DEFAULT: '#2D7A47',
          hover: '#225F37',
          bright: '#3EA55E',
          light: '#E6F3E4',
          subtle: 'rgba(45, 122, 71, 0.08)',
          border: 'rgba(45, 122, 71, 0.22)',
        },
        border: {
          subtle: '#E2E8DF',
          light: '#D0DBD0',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px -2px rgba(23, 38, 25, 0.05)',
        glow: '0 4px 20px -2px rgba(45, 122, 71, 0.25)',
        card: '0 8px 30px -8px rgba(23, 38, 25, 0.08)',
        hover: '0 16px 36px -10px rgba(23, 38, 25, 0.12)',
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
