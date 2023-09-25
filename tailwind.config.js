/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kinda-white': '#D8F3DC',
        'kinda-green': '#B7E4C7',
        'slightly-green': '#95D5B2',
        'kinda-dark-green': '#2D6A4F',
        'slightly-dark-green': '#1B4332',
        'real-dark-green': '#081C15',
        'most-dark-green': '#04100C'

      },
      fontFamily: {
        'custom-one': ['Handjet', 'cursive']
      }
    },
  },
  plugins: [],
}

