import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f8fafc",
        porcelain: "#ffffff",
        ink: "#111827",
        muted: "#5f6b7a",
        blue: {
          electric: "#2563eb",
          glow: "#5aa7ff",
        },
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        tactile:
          "0 24px 60px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.92)",
        inset:
          "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        blue: "0 18px 44px rgba(37, 99, 235, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
