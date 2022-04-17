const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary': '#E6DEFC',
        'login': '#9D174D',
        'button': '#185ABC'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
