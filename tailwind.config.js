module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#f0e2fc",
        primary: "#c3c2ed",
        plantLight: "#798533",
        plantDark: "#1c4122",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
