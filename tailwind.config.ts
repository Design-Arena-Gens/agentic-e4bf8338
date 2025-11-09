import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      colors: {
        brand: {
          dark: "#050510",
          primary: "#5C6CFF",
          secondary: "#00FFC6",
          accent: "#FF7AE4",
          muted: "#9CA4D0",
        },
        surface: {
          DEFAULT: "#0B0B1A",
          raised: "#14142C",
        },
      },
      boxShadow: {
        glow: "0 0 45px -10px rgba(92, 108, 255, 0.6)",
        card: "0 25px 45px -35px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(156, 164, 208, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 164, 208, 0.08) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(circle at 20% 20%, rgba(92,108,255,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,122,228,0.35), transparent 45%), radial-gradient(circle at 50% 100%, rgba(0,255,198,0.25), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
