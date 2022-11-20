/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sono: ['Sono', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/typography'),
  ],
}