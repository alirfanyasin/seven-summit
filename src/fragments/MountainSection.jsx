import React, { useState } from "react";
import semeruImg from "../../public/semeru.jpg";
import arjunoImg from "../../public/arjuno.jpg";
import raungImg from "../../public/raung.jpg";
import welirangImg from "../../public/welirang.jpg";
import argopuroImg from "../../public/argopuro.jpeg";
import lawuImg from "../../public/lawu.jpg";
import butakImg from "../../public/butak.jpg";

export default function MountainSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const images = [
    semeruImg,
    arjunoImg,
    raungImg,
    welirangImg,
    argopuroImg,
    lawuImg,
    butakImg,
  ];

  return (
    <section className="container">
      <header className="text-[#9AB7DA] text-center">
        <h2 className="text-4xl mb-8 font-bold">Mulai Berpetualang</h2>
        <p className="font-light text-xl">
          Buat pengalaman baru dengan menjelajahi keindahan <br /> dari tujuh
          gunung di Jawa Timur
        </p>
      </header>

      <div className="grid grid-cols-9 gap-4 mt-20">
        {images.map((img, index) => {
          const isHovered = hoveredCard === index;
          const isFirstCard = index === 0;

          return (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform ${
                isHovered
                  ? "col-span-3 scale-110" // Scale up the hovered card
                  : isFirstCard && hoveredCard !== null
                  ? "col-span-1 scale-90" // Scale down the first card when another is hovered
                  : isFirstCard
                  ? "col-span-3" // Keep the first card at its original size
                  : "col-span-1"
              } card-mountain`}
              style={{ minWidth: "120px" }} // Set a fixed minimum width for cards
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="h-[30em] bg-red-300 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Mountain ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
