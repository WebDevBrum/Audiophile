/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#D87D4A",
      lightOrange: "#FBAF85",
      primeBlack: "#101010",
      secondblack: "#000000",
      otherBlack: "#0E0E0E",
      grey: "#F1F1F1",
      lightGrey: "#FAFAFA",
      white: "#FFFFFF",
    },
    maxWidth: {
      // box: "730px",
    },
    fontFamily: {
      manBold: ["MAN-BOLD"],
      manReg: ["MAN-REG"],
      manMed: ["MAN-MED"],
    },

    fontSize: {
      H1: "56px", //bold
      H2: "40px", //bold
      H3: "32px", //bold
      H4: "28px", //bold
      H5: "24px", //bold
      H6: "18px", //bold
      SUB: "13px", //bold
      OVERLINE: "14px", //reg
      BODY: "15px", //medium
    },

    letterSpacing: {
      twopx: ".125em",
    },
    borderRadius: {
      // buttons: "10px",
      // search: "15px",
      // DEFAULT: "0.25rem",
      // DEFAULT: "4px",
      // md: "0.375rem",
      // lg: "0.5rem",
      // full: "9999px",
      // large: "12px",
    },

    extend: {
      height: {
        // 13: "3.125rem",
        // 17: "4.313rem",
        // 21: "5.313rem", //85px
        // 29: "7.313rem",
      },
      width: {
        // 18: "0.859rem",
        // 27: "6.625rem",
        // 29: "7.313rem",
        // 97: "41.563rem",
        // 98: "12.625rem",
        // 99: "26.188rem",
        // 99.5: "30.813",
        // 99.6: "35.813",
        // 100: "45.625rem",
      },
      lineHeight: {
        // 22: "1.389rem",
        // 12: "3rem",
      },
      maxWidth: {
        // 27: "6.625rem",
        // 29: "7.313rem",
        // 97: "41.563rem",
        // 98: "12.625rem",
        // 99: "26.188rem",
        // 100: "45.625rem",
      },
      spacing: {
        9.5: "2.4375rem",
        10.5: "2.625rem",
        41: "10.31rem",
        53: "13.5rem",
        57: "14.06rem",

        // 8.5: "2.188rem",
        // 13: "1.195rem", //19.12px
        // 18: "4.313rem", //69px
        // 22: "5.188rem",
        // 37: "2.313rem", //37px
        // 97: "41.563rem",
        // 98: "35.813rem",
        // 100: "45.625rem",
        90: "21.81rem",
        97: "24.75rem",
        98: "26.81rem",
      },
      screens: {
        minDesktop: "1110px", // was 1024
        minTablet: "601px",

        // => @media (min-width: 640px) { ... }
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
