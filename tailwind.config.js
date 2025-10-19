/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./menu.html",
    "./contact.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'rowdies': ['Rowdies', 'sans-serif']
      },
    },
  },
  plugins: [],
}