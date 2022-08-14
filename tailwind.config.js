/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Balsamiq: ['Balsamiq Sans', 'cursive'],
        Fira: ['Fira Code', 'monospace'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
