/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white': '2px 2px 8px rgba(170, 170, 170, 0.7)'
      }
    },
  },
  plugins: [],
}

