/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5C00',
        'secondary': '#1A1A1A',
        'light': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
} 