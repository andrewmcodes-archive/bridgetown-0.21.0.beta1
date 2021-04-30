/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  purge: ["./frontend/**/*.{js,ts}", "./src/**/*.*{erb,rb,html,md,liquid}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
