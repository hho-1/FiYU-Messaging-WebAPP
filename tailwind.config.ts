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
        main: "#FEAF00",
        navbarColor: "#F2EAE1",
        labelColor: "#6C6C6C",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
  },
  plugins: [],
};
export default config;
