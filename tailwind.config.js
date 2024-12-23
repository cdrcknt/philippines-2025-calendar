/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          from: '#9333ea', // purple-600
          via: '#3b82f6', // blue-500
          to: '#ec4899', // pink-500
        },
      },
    },
  },
  plugins: [],
}