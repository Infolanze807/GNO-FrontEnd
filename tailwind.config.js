/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js','node_modules/preline/dist/*.js'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

