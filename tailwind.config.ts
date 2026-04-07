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
        void: "#04040a",
        obsidian: "#0a0a0c",
        "neon-cyan": "#00f0e0",
        "neon-magenta": "#ff0080",
        "electric-orange": "#ff3d00",
        chrome: "#c8c8d0",
      },
    },
  },
  plugins: [],
};

export default config;
