/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        aldrich: ['Aldrich', 'sans-serif'],
        iceberg:['Iceberg', 'sans-serif'],
        inter:['Inter','sans-serif'],
        wallpoet:['Wallpoet','sans-serif'],
        sanchez:['Sanchez','serif']
      },
    },
  },
  plugins: [],
}