/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: 'rgb(220 38 38)',
        black: 'rgb(0 0 0)',
        yellow: 'rgb(234 179 8)',
      }
    },
  },
  plugins: [],
}

