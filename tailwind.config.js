/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#7A7A7A",
        borderColor: "#252524"
      }
    },
  },
  plugins: [],
}