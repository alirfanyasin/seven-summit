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
      padding: "10rem",
    },
    backgroundImage: {
      heroImage: "url('/hero-image.png')",
      heroImage2: "url('/hero-image2.png')",
      pattern: "url('/pattern.png')",
      footerImage: "url('/footer.png')",
      logo: "url('/logo.png')",
      lawuBg: "url('/lawu.jpg')",
      semeruBg: "url('/semeru.jpg')",
      arjunoBg: "url('/arjuno.jpg')",
      raungBg: "url('/raung.jpg')",
      welirangBg: "url('/welirang.jpg')",
      butakBg: "url('/butak.jpg')",
      argopuroBg: "url('/argopuro.jpeg')",
    },

    extend: {
      colors: {
        skyBlueColor: "#9AB7DA",
        darkGreenColor: "#4A7185",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
