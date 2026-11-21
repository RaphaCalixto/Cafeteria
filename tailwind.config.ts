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
        coffee: {
          950: "#0b0907",
          900: "#130f0c",
          850: "#1a1511",
          800: "#241d17",
          700: "#362b23",
          600: "#4e3e33",
          500: "#6e594a",
        },
        botanical: {
          950: "#0b120c",
          900: "#141f16",
          800: "#1b2c1f",
          700: "#273d2c",
          600: "#37523d",
          500: "#4b6f53",
          400: "#6e9477",
          300: "#9dbba3",
        },
        cream: {
          50: "#faf6f0",
          100: "#f4ede2",
          200: "#e9ddcb",
          300: "#dbc8af",
          400: "#c7b093",
          500: "#a89073",
        },
        terracotta: {
          400: "#df7853",
          500: "#c85f38",
          600: "#a94824",
        },
        brass: {
          300: "#eed59e",
          400: "#dfbd76",
          500: "#c9a150",
          600: "#a57f36",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "radial-amber": "radial-gradient(circle at 50% 40%, rgba(212, 146, 56, 0.15) 0%, rgba(11, 9, 7, 0) 70%)",
        "radial-botanical": "radial-gradient(circle at 50% 50%, rgba(55, 82, 61, 0.25) 0%, rgba(11, 9, 7, 0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
