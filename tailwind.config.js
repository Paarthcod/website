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
        bg: {
          light: '#F5F3EE',
          dark: '#111214',
          card: '#FAF8F5',
          darkCard: '#18191D',
        },
        primary: {
          DEFAULT: '#171717',
          light: '#F5F3EE',
        },
        muted: {
          DEFAULT: '#6F6F6A',
          dark: '#9A9A94',
        },
        accent: {
          DEFAULT: '#B7A98F',
          slate: '#A8B4B8',
          champagne: '#C5B79D',
        },
        border: {
          light: '#DCD9D2',
          dark: '#26272B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
