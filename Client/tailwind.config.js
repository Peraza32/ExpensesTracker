/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'true-blue':         '#0466C8',
        'sapphire':          '#0353A4',
        'yale-blue':         '#023E7D',
        'light-oxford-blue': '#002855',
        'oxford-blue':       '#001845',
        'dark-oxford-blue':  '#001233',
        'delft-blue':        '#33415C',
        'paynes-gray':       '#5C677D',
        'state-gray':        '#7D8597',
        'cool-gray':         '#979DAC',
        'isabelline':        '#edede9',
        'yellow':            '#ffdd00',
      },
    },
  },
  plugins: [],
}

