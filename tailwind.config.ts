// @ts-ignore
  module.exports = {
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: {
          pattern: "url('/images/pattern-bg.png')"
        }
      }
    },
    variants: {},
    plugins: [],
  }