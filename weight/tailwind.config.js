/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1700px', // Large screens
      'xl': '1280px', // Extra-large screens
    },
  },
  plugins: [],
}

