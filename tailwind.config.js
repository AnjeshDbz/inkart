/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1200px",
        "9xl": "1400px",
        "10xl": "1450px",
        "11xl": "1600px",
        "12xl": "1800px",
      },
    },
  },
  plugins: [],
};
