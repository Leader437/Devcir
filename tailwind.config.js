/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        yaro: ["Montserrat Alternates", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        customWhite: "#FFFFFF",
        customGrey: "#8D8D8D",
        customGreen: "#0DA354",
        customContrastGreen: "#0C512D",
        customDarkGreen: "#091110",
        customBrightGreen: "#00FF79",
        customFadedGreen: "#0DA35433",
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          width: '100%',
          maxWidth: '1200px',
          paddingRight: '16px',
          paddingLeft: '16px',
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingRight: "32px",
            paddingLeft: "32px",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingRight: "52px",
            paddingLeft: "52px",
          },
        },
      });
    },
  ],
}