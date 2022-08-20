/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{htm,html,js}"],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily:{
          ubuntu:['Ubuntu']
      }
    },
  },
  plugins: [],
}
