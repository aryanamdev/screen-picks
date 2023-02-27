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
    },
  },
  plugins: [require("daisyui")],
};
