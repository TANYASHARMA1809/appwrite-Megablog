/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#9d8189',
        skybrown:'#5e503f', // Define a custom color name (e.g., 'skyBlue'),
        tanya:'#1f2937'
      },
    },
  },
  plugins: [],
}

