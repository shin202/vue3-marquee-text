/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "up": {
          "0%": {
              transform: "translateY(100%)",
          },
          "100%": {
              transform: "translateY(-100%)",
          }
        },
        "down": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          }
        },
        "left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        },
        "right": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)"
          },
        }
      },
      animation: {
        "up": "up 10s linear infinite",
        "down": "down 10s linear infinite",
        "left": "left 10s linear infinite",
        "right": "right 10s linear infinite"
      }
    },
  },
  plugins: [],
}
