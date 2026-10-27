import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      colors: { ink: "#f4f4f4", mute: "#8f8f8f", line: "rgba(255,255,255,0.12)", canvas: "#070707" },
    },
  },
  plugins: [],
};
export default config;
