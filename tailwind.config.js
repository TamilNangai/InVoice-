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
       keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(-6px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.15s ease-out',
    },
     gridTemplateColumns: {
            'filters': '2fr 1fr 1fr 1fr 1fr',
        },
    },
  },
  plugins: [],
}