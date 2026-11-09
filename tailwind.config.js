const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ...colors,
      base: "#f8fafc",
      "base-dark": "#2D3748",
      grey: "#A0AEC0",
      dark: "#1A202C",
      primary: "#00D4A3",
      secondary: "#FF6B6B",
      accent: "#667eea",
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
