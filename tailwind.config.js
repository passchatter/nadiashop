/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice", "serif"],
        raleway: ["Raleway", "sans-serif"],
        numans: ["numans", "sans-serif"],
      },
      colors: {
        nadia: {
          100: "#FAF7F0",
          200: "#D8D2C2",
          300: "#B17457",
          400: "#4A4947",
          more400: "#93573B",
        },
      },
    },
  },
  plugins: [],
};
