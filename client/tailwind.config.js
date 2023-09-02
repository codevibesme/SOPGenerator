/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {fontSize: {
    xs: ['12px', '16px'],
    sm: ['14px', '20px'],
    base: ['16px', '19.5px'],
    lg: ['18px', '21.94px'],
    xl: ['20px', '24.38px'],
    '2xl': ['24px', '29.26px'],
    '6xl': ['70px', '72px'],
    '3xl': ['28px', '50px'],
    '4xl': ['48px', '58px'],
    '7xl': ['82px','90px'],
    '8xl': ['96px', '106px']
  },
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
      },
      transitionDuration: {
        '10000': "10000ms",
      },
      transitionDelay: {
        '5000': "5000ms",
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'form': "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}
