/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        flashWhite: "#f4f4f6",
        platinum: "#e6e6e9",
        platinumLight: "#f4f4f5",
        timberWolf: "#d4d4d8",
        taupe: "#9999a1",
        silver: "#d6d6d6",
        dim: "#66666e",
        battleGray: "#858585",
        french: "#b5b5ba",
        night: "#141414",
        jet: "#292929",
        jetLight: "#333333",
        jetGray: "#6d6d74",
        richBlack: "#2e2e2e",
        eerieBlack: "#1f1f1f",
        onyx: "#5b5b5b",
      },
      keyframes: {
        "bottom-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 255, 255, 1)",
          },
        },
      },
      animation: {
        "bottom-in": "bottom-in 0.8s ease-out forwards",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
