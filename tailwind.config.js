/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    backgroundImage: {
      heroImage: "url('/hero-image.png')",
      pattern: "url('/pattern.png')",
      footerImage: "url('/footer.png')",
      logo: "url('/logo.png')",
    },

    extend: {
      colors: {
        skyBlueColor: "#9AB7DA",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
