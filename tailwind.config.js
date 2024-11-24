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
          500: "#323130",
          more400: "#93573B",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-in-out",
        slideOut: "slideOut 0.3s ease-in-out",
        breathe: "breathe 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        breathe: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(250,247,240,0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(250,247,240,0.9)" },
        },
      },
    },
  },
  plugins: [],
};
