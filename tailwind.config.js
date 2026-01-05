/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f3ff",
          pink: "#ff007f",
          orange: "#f97316",
        },
        dark: {
          base: "#0a0a0c",
          card: "rgba(15, 23, 42, 0.7)",
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
        'neon-pink': '0 0 10px #ff007f, 0 0 20px #ff007f',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
