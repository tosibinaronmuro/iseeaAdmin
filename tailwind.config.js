const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather Sans", "serif"],
      notoSans: ["Noto Sans TC", "serif"],
      nunito: ["Nunito", "serif"],
      robotoSlab: ["Roboto Slab", "serif"],
      roboto: ["Roboto", "serif"],
      garmond: ["EB Garamond", "serif"],
      Poiret: ["Merriweather Sans", "serif"]
    },

    extend: {
      colors: {
        primary: "#FCC200",
        secondary: "#E5E5E5",
        tertiary: "#14213D",
        blackRgba: "rgba(0,0,0, 0.6)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      // borderRadius:{
      //   customRadius:  53% 47% 52% 48% 
        
      // },
    },
  },
  plugins: [],
};
