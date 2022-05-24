module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B1464",
          50: "#DEDBF8",
          100: "#CECAF4",
          200: "#AEA8EE",
          300: "#8E86E7",
          400: "#6F64E0",
          500: "#4F42D9",
          600: "#3728CA",
          700: "#2D22A8",
          800: "#241B86",
          900: "#1B1464",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
