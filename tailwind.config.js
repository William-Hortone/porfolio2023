/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["CustomFontFamily", "serif"],
        secondary: ["secondFontFamily", "serif"],
        alt: ['"Open Sans"', "sans-serif"],
        title: ['"Cormorant Upright"', "serif"],
        tertiary: ['"tertiaryFontFamily"', "serif"],
      },
    },
    // addUtilities({
    // '.text-stroke': {
    //   '-webkit-text-stroke-width': '1px',
    // },
    // '.text-stroke-white': {
    //   '-webkit-text-stroke-color': '#ffffff',
    // },
    // });
  },
  plugins: [],
};
