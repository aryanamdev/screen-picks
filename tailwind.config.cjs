/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        accent: "#FFB84C",
        body: "#3A1078",
        midaqua: "#B5F1CC",
      },
      height: {
        vh: "98vh",
      },
      keyframes: {
        beat: {
          "50%": { opacity: ".5" },
        },
      },
    },
  },
  animation: {
    "waving-hand": "beat 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  plugins: [require("daisyui")],
};
