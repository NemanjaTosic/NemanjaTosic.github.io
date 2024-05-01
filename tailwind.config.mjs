/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f0fa',
          100: '#eee4f7',
          200: '#cfbae8',
          300: '#b195db',
          400: '#7457c2',
          500: '#164ED0',
          600: '#2d1d96',
          700: '#20147d',
          800: '#160d63',
          900: '#0d074a',
          950: '070330'
        },
        fontFamily: {
          body: ["'Times New Roman'"]
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
