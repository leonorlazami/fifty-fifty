/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFDF7',
        'secondary': '#023E8A',
        'tertiary': '#E8E0D1',
        'selected': '#E6E4DF'



      },
      fontFamily: {
        'primary': ['Open Sans', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

