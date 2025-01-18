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
      heroImage: "url('/bg-hero/hero-image.png')",
      heroImage2: "url('/bg-hero/hero-image2.png')",
      heroImage3: "url('/bg-hero/hero-image3.png')",
      heroImage4: "url('/bg-hero/bg-community.png')",
      heroImage5: "url('/bg-hero/bg-tips.png')",
      footerImage: "url('/bg-hero/footer.png')",
      pattern: "url('/pattern.png')",
      logo: "url('/logo.png')",

      lawuBg: "url('/mountain/lawu.jpg')",
      semeruBg: "url('/mountain/semeru.jpg')",
      arjunoBg: "url('/mountain/arjuno.jpg')",
      raungBg: "url('/mountain/raung.jpg')",
      welirangBg: "url('/mountain/welirang.jpg')",
      butakBg: "url('/mountain/butak.jpg')",
      argopuroBg: "url('/mountain/argopuro.jpg')",
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
