/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/index.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: {
          DEFAULT: "#710000",
        },
        black: {
          DEFAULT: "#0A100D",
        },
        white: {
          DEFAULT: "#F5F5F5",
        },
        pink: {
          light: "#fff5f5",
          DEFAULT: "#FFECEC",
          dark: "#F6E3E3",
        },
        green: {
          DEFAULT: "#09814A",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        logo: ["Arsenal SC", "sans-serif"],
        serif: ["Merriweather", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
