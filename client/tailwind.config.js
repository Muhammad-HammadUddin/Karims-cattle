/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFEFB",
        white: "#FFFFFF",
        // "forest" now carries the deep gold/bronze brand tone (used for
        // headings and primary buttons) — kept as the same key so every
        // existing text-forest / bg-forest class picks up the new theme.
        forest: {
          DEFAULT: "#8A6A22",
          light: "#A8822C",
          dark: "#5F480F",
        },
        brass: {
          DEFAULT: "#C9962C",
          light: "#E0B45C",
          dark: "#9C7220",
        },
        charcoal: "#2A2A28",
        sand: "#EDE1C0",
        sandlight: "#FBF6E9",
        status: {
          overdue: "#C0392B",
          duesoon: "#D3A64C",
        },
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Courier New'", "monospace"],
      },
      boxShadow: {
        ledger: "0 1px 2px rgba(31, 58, 46, 0.06), 0 2px 8px rgba(31, 58, 46, 0.04)",
        card: "0 1px 3px rgba(42, 42, 40, 0.06), 0 4px 16px rgba(42, 42, 40, 0.05)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
