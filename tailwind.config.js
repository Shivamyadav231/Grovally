

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        panel: "0 30px 90px rgba(15, 23, 42, 0.18)",
      },
      animation: {
        "slow-spin": "slowSpin 0s linear infinite",
      },
    },
  },
  plugins: [],
};
