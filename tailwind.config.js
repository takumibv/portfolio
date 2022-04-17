const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ...colors,
      base: "#f5f5f5",
      "base-dark": "#333",
      grey: "#999",
      dark: "#181818",
    },
    screens: {
      sp: "320px",
      tablet: "960px",
      desktop: "1280px",
    },
  },
  plugins: [],
  important: true,
};
