/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1E2B5B",
          midnight: "#111A3A",
          gold: "#D9A900",
          yellow: "#FDC210",
          ivory: "#F8F6EF",
          cream: "#FFFDF7",
          black: "#010204",
          white: "#FFFFFF",
          muted: "#66708A",
        },
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },

      boxShadow: {
        premium:
          "0 25px 80px rgba(30,43,91,0.15)",

        gold:
          "0 15px 50px rgba(217,169,0,0.18)",
      },

      letterSpacing: {
        executive: "0.18em",
      },
    },
  },

  plugins: [],
};