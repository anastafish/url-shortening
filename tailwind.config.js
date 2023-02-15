/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      poppins:['Poppins']
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      cyan: 'hsl(var(--cyan))',
      dark_violet:'hsl(var(--Dark-Violet))',
      red:'hsl(var(--red))',
      gray:'hsl(var(--gray))',
      grayish:'hsl(var(--grayish))',
      dark_blue:'hsl(var(--dark-blue))',
      very_dark_violet:'hsl(var(--very-dark-violet))',

    },

    extend: {
      backgroundImage:{
        shorten:"url('/src/url-shortening-api-master/images/bg-shorten-desktop.svg')"
      }
    },
  },
  plugins: [],
}