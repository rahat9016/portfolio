/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#EBEBEB",
        secondary: "#2D2D2D",
        primary: "#F7F7F7",
        red: "#EA1538",
        darkBlack: "#333333",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
