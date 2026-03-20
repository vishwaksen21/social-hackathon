/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFF00',
        'primary-dark': '#d6d600',
        background: '#000000',
        'card-bg': 'rgba(15,15,15,0.7)',
        border: '#333333',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255,255,0,0.3)',
        'glow-lg': '0 0 40px rgba(255,255,0,0.4)',
      },
    },
  },
  plugins: [],
}
