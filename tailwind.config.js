module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      base: "#F5F5F5",
      grey: "#999",
    },
    screens: {
      sp: "320px",
      tablet: "680px",
      desktop: "1280px",
    },
  },
  plugins: [],
  important: true,
};
