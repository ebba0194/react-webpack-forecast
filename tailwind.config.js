module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      ecru: '#BFB48F',
      darkLiver: '#564E58',
      isabelline: '#F2EFE9',
      raisinBlack: '#252627',
      dodgerBlue: '#0496FF'
    },
    textColor: theme => theme('colors'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
