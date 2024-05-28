/** @type  {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "primary-color": "#0CBC84",        
        "secondary-color": "#253343",
        "placeholder-color": "#92A7C1",
        "input-color": "#F5F7FA",
        'black-background': '#121212',
        'black-primary': '#1E1E1E',
        'black-secondary': '#272727',
        'black-third': '#272F2F',
        'black-fourth': '#333333',

        // Border
        'main-border': '#353535',

        // Text
        'primary-text': '#F5F5FA',
        'secondary-text': '#EDEDF1',
        'third-text': '#E2E2E9',

        // Brand
        'brand-primary-color': '#03DAC5',
        'brand-secondary-color': '#7705FB',

        // Status
        'red-status': '#FC5474',
        'green-status': '#0DC78D',
        'orange-status': '#FAB307',
        'red-background': '#FDE7E7',
        'green-background': '#CFFAF4',
      },
    },
  },

  plugins: [],
};