/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode:false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
}
