/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      snackbarClasses: "bg-blue-500 text-white"
    },
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1700px', // Large screens
      'xl': '2500px', // Extra-large screens
      '2xl':'3500px',
      '3xl':'4500px',
      
    },
  },
  plugins: [],
}

