/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#041d30',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Hind Siliguri', 'sans-serif'],
        bengali: ['Hind Siliguri', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(2, 6, 23, 0.04), 0 8px 24px -12px rgba(2, 6, 23, 0.12)',
        'card-hover': '0 2px 4px rgba(2, 132, 199, 0.06), 0 24px 48px -16px rgba(2, 132, 199, 0.28)',
        glow: '0 0 0 1px rgba(56, 189, 248, 0.25), 0 12px 40px -8px rgba(2, 132, 199, 0.45)',
      },
      animation: {
        'ken-burns': 'kenburns 24s ease-in-out infinite alternate',
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'float-slow': 'floaty 11s ease-in-out infinite',
        'bounce-soft': 'bouncesoft 2.2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.02) translate(0, 0)' },
          '100%': { transform: 'scale(1.14) translate(-1.5%, -2%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bouncesoft: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.9' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
