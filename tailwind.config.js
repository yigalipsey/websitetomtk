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
        background: "var(--background)", // צבע רקע מותאם
        foreground: "var(--foreground)", // צבע טקסט מותאם
      },
      fontFamily: {
        faculty: ['"Faculty Glyphic"', "sans-serif"], // פונט Faculty Glyphic
        libre: ['"Libre Baskerville"', "serif"], // פונט Libre Baskerville
        bebas: ['"Bebas Neue"', "cursive"], // פונט Bebas Neue
      },
    },
  },
  plugins: [],
};
