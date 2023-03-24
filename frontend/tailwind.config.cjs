const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        card: "1 / 1.91",
      },
    },
  },
  plugins: [],
};
