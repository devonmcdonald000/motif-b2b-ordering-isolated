import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EAFBF8",
          200: "#A2D2CA",
          300: "#378188"
        },
        secondary: {
          100: "#E4EAEE",
          200: "#5D676F",
          300: "#333F48"
        },
        disabled: "#C7D7E5",
        danger: "#FF0000"
      },
    },
  },
  plugins: [],
};
export default config;
