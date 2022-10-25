/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          100: '#2e2f34',
          120: '#2b2b33',
          130: '#34353a'
        },
        'white': {
          50: '#d6d8db',
          100: '#999aa0',
          150: '#7e7f85',
        },
        'red': {
          11: '#716958',
        },
        'blue': {
          10: '#1F2034',
          20: '#222641',
          30: '#1b1b24',
        },
        'yellow': {
          10: '#CA951F',
        },
        'light-gray': {
          10: '#EFF2F9'
        },
        
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
        },
        screens: {
          xl: '1120px'
        }
      },
    },
  },
  plugins: [],
}
