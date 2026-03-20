/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "surface-secondary": "var(--color-surface-secondary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        separator: "var(--color-separator)",
      },
      fontFamily: {
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        hero: ["96px", { lineHeight: "1.05", fontWeight: "700", letterSpacing: "-0.015em" }],
        display: ["64px", { lineHeight: "1.05", fontWeight: "700", letterSpacing: "-0.009em" }],
        headline: ["48px", { lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.003em" }],
      },
      borderRadius: {
        "apple-sm": "12px",
        apple: "18px",
        "apple-lg": "22px",
      },
      boxShadow: {
        card: "0 4px 24px var(--shadow-card)",
        "card-hover": "0 8px 40px var(--shadow-card-hover)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
