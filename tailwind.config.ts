import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f2ff",
          100: "#efe4ff",
          200: "#dfc9ff",
          300: "#c7a3ff",
          400: "#ab74ff",
          500: "#9145ff",
          600: "#7f2ef0",
          700: "#6d1dd0",
          800: "#5a1ba9",
          900: "#4b1b89"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(112, 51, 214, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
