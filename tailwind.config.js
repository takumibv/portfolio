module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      base: "#f5f5f5",
      "base-dark": "#333",
      grey: "#999",
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
