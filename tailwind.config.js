/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "948px",
      },
      backgroundImage: {
        background: "url('/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
