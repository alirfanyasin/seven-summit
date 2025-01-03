export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Padding default untuk ukuran layar kecil
        lg: "10rem", // Padding untuk ukuran layar besar
        md: "5rem", // Padding untuk ukuran layar menengah
      },
    },
    backgroundImage: {
      heroImage: "url('/hero-image.png')",
      heroImage2: "url('/hero-image2.png')",
      heroImage3: "url('/hero-image3.png')",
      heroImage4: "url('/bg-community.png')",
      heroImage5: "url('/bg-tips.png')",
      pattern: "url('/pattern.png')",
      footerImage: "url('/footer.png')",
      logo: "url('/logo.png')",
      lawuBg: "url('/mountain/Lawu/img-2.jpg')",
      semeruBg: "url('/semeru.jpg')",
      arjunoBg: "url('/mountain/Arjuno/img-3.jpg')",
      raungBg: "url('/raung.jpg')",
      welirangBg: "url('/mountain/Welirang/img-1.jpg')",
      butakBg: "url('/butak.jpg')",
      argopuroBg: "url('/mountain/Argopuro/img-2.jpg')",
    },

    extend: {
      colors: {
        skyBlueColor: "#9AB7DA",
        darkGreenColor: "#4A7185",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        // "loop-scroll-back": "loop-scroll-back 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        // "loop-scroll-back": {
        //   from: { transform: "translateY(-0)" },
        //   to: { transform: "translateY(100%)" },
        // },
      },
    },
  },
  plugins: [],
};
