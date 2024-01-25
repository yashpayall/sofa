/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Jost:['Jost', 'sans-serif'],
        Montserrat:['Montserrat', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
