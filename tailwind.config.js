/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34D399', // emerald green
          light: '#6EE7B7',
          dark: '#059669'
        },
        secondary: {
          DEFAULT: '#F472B6', // pink
          light: '#FBCFE8',
          dark: '#DB2777'
        },
        background: {
          light: '#F8FAFC', // very light gray for light mode
          dark: '#0F172A'   // slate-900 for dark mode
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B'   // slate-800
        }
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        display: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        italic: ['Cormorant', 'serif']
      },
      animation: {
        'blur-out': 'blur-out 2s ease-out forwards',
      },
      keyframes: {
        'blur-out': {
          '0%': { filter: 'blur(0)' },
          '100%': { filter: 'blur(8px)', opacity: '0.3' }
        }
      }
    },
  },
  plugins: [],
};