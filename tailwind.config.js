const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateGray: '#313132',
        textBlack: '#1d1d1f',
        textGray: '#6e6e73'
      },
    },
    screens: {
      xs: '440px',
      gridsm: '1180px',
      ...defaultTheme.screens
    },
  },
  plugins: [],
}