const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["hidden"],
  theme: {
    extend: {
      animation: {
        appear: "appear .5s ease-out both",
        appearReversed: "appearReversed .5s ease-out both",
      },
      keyframes: {
        appear: {
          "0%": { transform: `scale(0.1)`, opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        appearReversed: {
          "0%": { transform: `scale(${1.5})` },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        card: "2 / 3",
      },
    },
  },
  plugins: [],
};
