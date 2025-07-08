module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: '#2F3E46',
        steel: '#4682A9',
        rust: '#B64926',
        ash: '#F0F0F0',
        gunmetal: '#1A1A1A',
        brass: '#D9A441',
      },
    },
  },
  plugins: [],
}