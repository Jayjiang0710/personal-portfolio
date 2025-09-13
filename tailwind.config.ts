import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f5fbff',
          100: '#eaf6ff',
          200: '#cfeeff',
          300: '#a8e1ff',
          400: '#7bd0ff',
          500: '#56c2ff',
          600: '#39a6e6',
          700: '#2c84b4',
          800: '#256a90',
          900: '#215a77'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.06)',
        card: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
} satisfies Config


