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
        'white': '2px 2px 8px rgba(170, 170, 170, 0.7)',
        'primary': '1px 1px 6px rgba(0, 0, 0, 0.5)',
      },
      fill: {
        'cinema-on': 'var(--color-cinema-yellow)',
        'cinema-off': 'var(--color-cinema-gray)',
      }
    },
  },
  plugins: [],
}