/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-gray": "#FAFAFA",
        "night-black": "#0D1117",
        "night-gray": "#21262D",
        "night-teal": "#22F1BF",
        "night-purple": "#3B2FCF",
        "night-blue": "#4F51AF",
        "night-white": "#FFFFFF",
        "steel-blue": "#437286",
        "code-block": "#011627",
        "twitter-blue": "#1DA1F2",
        "linkedin-blue": "#0077B5",
        "github-black": "#333333",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  variants: {
    // scrollbar: ["rounded"], -> deprecated
  },
};
