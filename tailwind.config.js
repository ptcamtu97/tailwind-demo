
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      width: {
        '100': '40rem',
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })],
  darkMode: 'class'
}

