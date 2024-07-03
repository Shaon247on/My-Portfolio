/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'synthwave': "url('https://i.pinimg.com/564x/7a/5e/8e/7a5e8efa4d7644e054fb4e4517c8bf00.jpg')",
        'winter': "url('https://i.pinimg.com/736x/ab/5b/fd/ab5bfd7ce5a11037422f1c8e17e7e339.jpg')",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter', 'synthwave']
  },
  darkMode: ['class', '[data-theme="synthwave"]']
}

