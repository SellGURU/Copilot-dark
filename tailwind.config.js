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
      },
    },
  },

  plugins: [],
};