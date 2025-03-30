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
        prime: "#FADFCA",
        mainColor: "#252422",
        "primary-3": "#ffbcbc",
        "primary-1": "#89b592",
        "secondary-3": "#fadfca",
        "bg-color": "#yourBackgroundColor",   
      },
      screens: {
        xs: "440px",
      },
    },
    width: {
      "18rem": "18rem",
    },
    padding: {
      3: "0.75rem",
    },
    fontFamily: {
      Helvetica: ["ui-Helvetica", "sans-serif"],
      sora: ["ui-Sora", "sans-serif"],
    },
    backgroundImage: {
      
      BgImg: ["url('./assets/bgImg.svg')"],
    }
  },
  plugins: [import("flowbite/plugin")],
};
