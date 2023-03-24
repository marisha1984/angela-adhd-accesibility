module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Source Sans Pro, sans-serif'
      },
      colors: {
        'olive': {
          100: '#EBFFE2',
          200: '#C5DFB9',
          400: '#8CBC76',
          500: '#70985E'
        }
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
