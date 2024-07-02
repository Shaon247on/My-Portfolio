/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'night': "url('/src/assets/Dark-bg.gif')",
        'winter': "url('https://i.ibb.co/56CR3Wy/light-bg.gif')",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter', 'night']
  },
  darkMode: ['class', '[data-theme="night"]']
}

