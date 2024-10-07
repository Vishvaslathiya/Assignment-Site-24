/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
      'prime': '#FADFCA',
      'mainColor' :'#252422',
      'primary-3':'#ffbcbc',
      'secondary-3':'#fadfca'
      }
    },
    fontFamily: {
      'Helvetica': ['ui-Helvetica', 'sans-serif'],
      'sora': ['ui-Sora', 'sans-serif'],
      
    }
   
  },
  plugins: [import("flowbite/plugin")],
};
