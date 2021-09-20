module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily:{
      'body': ["'Poppins', sans-serif"]
    },
    extend: {
      colors: {
        "light" : '#BCD0E5',
        "secondary": '#173A56',
        "primary": '#02897A'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}