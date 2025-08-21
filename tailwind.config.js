/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./about.html",
     "./products.html",
     "./sub.html",
     "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

