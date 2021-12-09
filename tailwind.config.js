const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        darkGray: "#121212",
        primaryGray: "#232323",
        secondaryGray: "#161616",
        gradientBlue: "rgb(63, 94, 251)",
        gradientIndigo: "rgb(118, 79, 252)",
        gradientPurple: "rgb(149, 70, 252)",
        primaryGreen: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
