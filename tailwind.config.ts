import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        violet: "0 0 70px rgba(139, 92, 246, 0.42)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(168,85,247,0.28)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(-8%, -4%, 0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(6%, 5%, 0) rotate(8deg) scale(1.08)" },
        },
        "mesh-drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.96)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.25)", opacity: "0" },
        },
      },
      animation: {
        aurora: "aurora-shift 16s ease-in-out infinite",
        mesh: "mesh-drift 10s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
