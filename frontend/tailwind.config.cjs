const defaultTheme = require("tailwindcss/defaultTheme");

const durationValuesMs = [0, 75, 100, 150, 200, 300, 500, 700, 1000];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["hidden"],
  theme: {
    extend: {
			colors:{
				"primary-800": "#635A4C",
				"primary-700": "#7C705F",
				"primary-500": "#F1C47E",
				"primary-300": "#FFDFAF",
				"primary-200": "#ECE3C6",
				"secondary-800": "#765F56",
				"secondary-500": "#E48E67",
				"secondary-400": "#FABA9E",
				"secondary-300": "#FFC8AF",
				"secondary-100": "#FFFBF5",
			},
      animation: durationValuesMs.reduce((acc, ms) => ({
        ...acc,
        [`appear-${ms}`]: `appear ${ms}ms ease-out both`,
        [`appear-reversed-${ms}`]: `appearReversed ${ms}ms ease-out both`,
      })),
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
      screens: {
        "pointer-fine": { raw: "(pointer:fine)" },
      },
    },
  },
};
