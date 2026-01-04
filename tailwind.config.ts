import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary ice blues
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd4fd',
          400: '#36bffa',
          500: '#0ca5eb',
          600: '#0086c9',
          700: '#016aa3',
          800: '#065986',
          900: '#0b4a6f',
          950: '#072f4a',
        },
        // USA Red accent
        usa: {
          red: '#BF0A30',
          redDark: '#9A0826',
          redLight: '#D91E47',
        },
        // Neutral grays with cool undertone
        slate: {
          850: '#1a2332',
          950: '#0d1321',
        },
        // Additional accents
        silver: '#C0C0C0',
        gold: '#FFD700',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'ice-gradient': 'linear-gradient(135deg, #0b4a6f 0%, #0ca5eb 50%, #b9e5fe 100%)',
        'ice-gradient-dark': 'linear-gradient(135deg, #072f4a 0%, #065986 50%, #0086c9 100%)',
        'usa-gradient': 'linear-gradient(135deg, #BF0A30 0%, #D91E47 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
