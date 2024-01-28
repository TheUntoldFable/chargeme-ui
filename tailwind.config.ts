import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const baseConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logoBG": "url('/assets/images/background.jpg')",
      },
      colors: {
        gray92: "#EBEBEB",
        chargeMeYellow: "#E9C500",
      },

      fontFamily: {
        Overpass: "Overpass",
      },
    },
  },
  plugins: [],
};

const config = withMT(baseConfig);

export default config;
