module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          secondary: '#f0e2fc',
          primary: '#c3c2ed'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
