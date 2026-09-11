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
        // Quiet Luxury Palette
        ivory: '#F4F1EA',
        stone: '#E5E1D8',
        warmGrey: '#B8B3A9',
        taupe: '#918B80',
        charcoal: '#242321',
        deepCharcoal: '#151514',
        softBlack: '#0D0D0C',
        olive: '#737565',
        clay: '#A47F68',
        bronze: '#9A8064',
        
        bg: {
          light: '#F4F1EA',
          stone: '#E5E1D8',
          dark: '#151514',
          black: '#0D0D0C',
          card: '#E5E1D8',
          darkCard: '#242321',
        },
        primary: {
          DEFAULT: '#242321',
          light: '#F4F1EA',
          dark: '#151514',
        },
        muted: {
          DEFAULT: '#918B80',
          dark: '#B8B3A9',
        },
        accent: {
          DEFAULT: '#737565',
          olive: '#737565',
          clay: '#A47F68',
          bronze: '#9A8064',
          slate: '#848B94',
        },
        border: {
          light: '#B8B3A9',
          dark: '#242321',
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
