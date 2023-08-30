/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', 'sans-serif'],
      },
      transitionDuration: {
        '10000': "10000ms",
      },
      transitionDelay: {
        '5000': "5000ms",
      }
    },
  },
  plugins: [],
}
