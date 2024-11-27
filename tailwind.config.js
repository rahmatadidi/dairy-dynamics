/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "right-bottom": "4px 4px 10px rgba(0, 0, 0, 0.5)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
