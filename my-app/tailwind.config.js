// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        milk: '#faeade',
        'milk-yellow': '#e3d3bc',
        'dark-brown': '#523122',
        'mid-brown': '#a26833',
        'light-brown': '#e3a458',
        'red-brown': '#7f3b2d',
        red: '#a02128',
      },
      height: {
        dvh: '100dvh',
      },
    },
  },
  plugins: [],
};