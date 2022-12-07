/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: '#5352ed',
      primaryShade: '#2524e8',
      secondary: '#cfcefa',
      white: '#FFFFFF',
      grayBorder: '#DDDDDD'
    }
  },
  plugins: [],
}
