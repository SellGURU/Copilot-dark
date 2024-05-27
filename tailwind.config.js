/** @type  {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage : {
        'tabs-backgrund' : 'linear-gradient(0deg, #121212, #121212), linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
      },
      colors: {
        "primary-color": "#0CBC84",

        "background":'#121212',
        
        "secondary-color": "#253343",

        "placeholder-color": "#92A7C1",

        "input-color": "#F5F7FA",
        
      },
    },
  },

  plugins: [],
};