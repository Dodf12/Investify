/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          // texts
            'custom-primary': '#000000',
            'custom-secondary': '#1E1E1E',

            // Ui redesign
            // Redesigned White Colors
            'white50': '#FFFFFF',
            'white100': '#F5F5F5',
            'white200': '#EEEEEE',
            'white300': '#E7E7E3',
            'white400': '#DFDED4',
            'white500': '#DFDBCF',
            'white600': '#D8D4C9',
            'white700': '#C9C6BC',
            'white800': '#BDBBB3',
            'white900': '#B6B4AD',

            // Redesigned Gray Colors
            'gray50': '#BDBDBD',
            'gray100': '#A4A4A4',
            'gray200': '#949494',
            'gray300': '#838383',
            'gray400': '#767676',
            'gray500': '#5D5D5D',
            'gray600': '#4D4D4D',
            'gray700': '#353535',
            'gray800': '#1B1B1B',
            'gray900': '#000000',

            // Redesigned Blue Colors
            'blue50': '#d5eaf1',
            'blue100': '#bdeaf4',
            'blue200': '#a4eaf7',
            'blue300': '#8ceafa',
            'blue400': '#67eaff',
            'blue500': '#63eaff',
            'blue600': '#5ceaff',
            'blue700': '#54eaff',
            'blue800': '#4deaff',

          }
        }
    },
  plugins: [
    require('daisyui'),
  ],
};
