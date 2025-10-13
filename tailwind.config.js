/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-cancha': '#2F6D3A',
        'negro-tribuna': '#1C1C1C',
        'dorado-gol': '#E2B100',
        'blanco-cal': '#F7F7F7',
        'rojo-pasion': '#D32F2F',
        'gris-cemento': '#9E9E9E',
      }
    },
  },
  plugins: [],
}

