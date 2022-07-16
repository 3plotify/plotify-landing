module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: {
          dark: '#191923',
          light: '#FBFEF9',
        },
        primary: {
          DEFAULT: '#0E79B2',
          dark: '#0E79B2',
          light: '#0E79B2',
          'hover-dark': '#0E79B2',
          'hover-light': '#0E79B2',
        },
        secondary: {
          DEFAULT: '#BF1363',
          dark: '#BF1363',
          light: '#BF1363',
          'hover-dark': '#BF1363',
          'hover-light': '#BF1363',
        },
        font: {
          DEFAULT: '#FBFEF9',
          dark: '#FBFEF9',
          light: '#FBFEF9',
          'hover-dark': '#FBFEF9',
          'hover-light': '#FBFEF9',
        },
        highlight: {
          DEFAULT: '#F39237',
          dark: '#F39237',
          light: '#F39237',
          'hover-dark': '#F39237',
          'hover-light': '#F39237',
        },
      },
    },
  },
  plugins: [],
}