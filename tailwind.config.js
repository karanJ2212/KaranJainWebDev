// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx}"], // Add your content paths here
  mode: "jit", // Enable JIT mode
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRightTwice: {
          "0%, 100%, 200%": { transform: "translateX(-100%)" },
          "50%, 150%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideRight: "slideRight 1s ease-in-out",
        slideRightTwice: "slideRightTwice 2s ease-in-out",
      },
    },
  },
  variants: {},
  plugins: [],
};
