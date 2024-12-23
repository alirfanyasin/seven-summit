import React, { useState } from "react";
import semeruImg from "../../public/semeru.jpg";
import arjunoImg from "../../public/mountain/Arjuno/img-3.jpg";
import raungImg from "../../public/raung.jpg";
import welirangImg from "../../public/mountain/Welirang/img-1.jpg";
import argopuroImg from "../../public/mountain/Argopuro/img-2.jpg";
import lawuImg from "../../public/mountain/Lawu/img-2.jpg";
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

  const datas = [
    {
      name: "Semeru",
      height: "3.676",
      trackCount: "2",
      image: semeruImg,
      bgClass: "bg-semeruBg",
      description:
        "Gunung Semeru atau Gunung Meru adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia. Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, 3.676 meter dari permukaan laut.",
      address: "Lumajang, Malang",
      track: ["Watu Rejeng", "Ranu Pane"],
    },
    {
      name: "Arjuno",
      height: "3.339",
      trackCount: "4",
      image: arjunoImg,
      bgClass: "bg-arjunoBg",
      description:
        "Gunung Arjuno adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia dengan ketinggian 3.339 m dpl. Gunung Arjuno secara administratif terletak di perbatasan Kota Batu, Kabupaten Malang, dan Kabupaten Pasuruan dan berada di bawah pengelolaan Taman Hutan Raya Raden Soerjo",
      address: "Malang, Kota Batu, Pasuruan",
      track: ["Tretes", "Lawang", "Purwosari", "Batu"],
    },
    {
      name: "Raung",
      height: "3.332",
      trackCount: "4",
      image: raungImg,
      bgClass: "bg-raungBg",
      description:
        "Gunung Raung adalah gunung tertinggi ketiga di Jawa Timur setelah Gunung Semeru dan Arjuno. Di Pulau Jawa, gunung ini adalah yang tertinggi nomor empat. Gunung Raung memiliki empat puncak yaitu Puncak Bendera, Puncak 17, Puncak Tusuk Gigi dan Puncak Sejati.",
      address: "Banyuwangi, Bondowoso, Jember",
      track: ["Kalibaru", "Sumber Wringin", "Glenmore", "Jambewangi"],
    },
    {
      name: "Welirang",
      height: "3.156",
      trackCount: "7",
      image: welirangImg,
      bgClass: "bg-welirangBg",
      description:
        "Gunung Welirang adalah sebuah gunung berapi aktif dengan ketinggian 3.156 mdpl yang secara administratif terletak di perbatasan Kota Batu, Kabupaten Pasuruan, dan Kabupaten Mojokerto, Jawa Timur, Indonesia. Gunung Welirang berada dalam pengelolaan Taman Hutan Raya Raden Soerjo.",
      address: "Pasuruan, Mojokerto, Batu",
      track: [
        "Tretes",
        "Cangar",
        "Pacet",
        "Lawang",
        "Karangploso",
        "Sumberawan",
        "Purwosari",
      ],
    },
    {
      name: "Argopuro",
      height: "3.088",
      trackCount: "2",
      image: argopuroImg,
      bgClass: "bg-argopuroBg",
      description:
        "Gunung Argapura (sering dieja Gunung Argopuro) adalah sebuah gunung berapi kompleks yang terdapat di Jawa Timur, Indonesia. Gunung Argapura mempunyai ketinggian setinggi 3.088 meter. Gunung Argapura merupakan bekas gunung berapi yang kini sudah tidak aktif lagi. Puncak Gunung Argapura adalah titik tertinggi di Pegunungan Iyang.",
      address: "Probolinggo, Situbondo, Bondowoso",
      track: ["Bremi", "Baderan"],
    },
    {
      name: "Lawu",
      height: "3.265",
      trackCount: "4",
      image: lawuImg,
      bgClass: "bg-lawuBg",
      description:
        "Gunung Lawu adalah sebuah gunung berapi aktif yang terletak di Pulau Jawa, tepatnya di perbatasan Jawa Tengah dan Jawa Timur, Indonesia. Gunung Lawu memiliki ketinggian sekitar 3.265 mdpl. Gunung Lawu terletak di antara tiga kabupaten, yaitu Karanganyar di Jawa Tengah, Ngawi, dan Magetan di Jawa Timur. Status gunung ini adalah gunung api, yang diperkirakan terakhir meletus pada tanggal 28 November 1885 dan telah lama tidak aktif",
      address: "Karanganyar, Magetan",
      track: ["Cemoro Sewu", "Cemoro Kandang", "Candi Cetho", "Singolangu"],
    },
    {
      name: "Butak",
      height: "2.868",
      trackCount: "4",
      image: butakImg,
      bgClass: "bg-butakBg",
      description:
        "Gunung Butak adalah sebuah gunung berapi kerucut yang terletak di perbatasan Kabupaten Malang dan Kabupaten Blitar dalam wilayah Provinsi Jawa Timur, Indonesia. Gunung Butak terletak berdekatan dengan Gunung Kawi. Tidak diketemukan catatan sejarah atas erupsi dari Gunung Butak sampai saat ini.",
      address: "Blitar, Malang",
      track: [
        "Sirah Kencong",
        "Gunung Kawi Kepanjen",
        "Desa Gadingkulon-Dau-Malang",
        "Gunung Panderman, Batu",
      ],
    },
  ];

  return (
    <section className="container">
      <header className="text-center text-skyBlueColor">
        <h2 className="mb-8 text-2xl font-bold lg:text-4xl">
          Mulai Berpetualang
        </h2>
        <p className="text-sm font-light lg:text-xl">
          Buat pengalaman baru dengan menjelajahi keindahan <br /> dari tujuh
          gunung di Jawa Timur
        </p>
      </header>

      <div className="hidden lg:block">
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
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-[30em] rounded-xl w-full overflow-hidden">
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
      </div>

      <div className="block lg:hidden">
        <div className="grid grid-cols-2 gap-2 mt-20">
          {datas.map((data, index) => (
            <div
              key={index}
              className={`w-full p-2 bg-glass hover:cursor-pointer card rounded-xl group ${
                index === 0 ? "col-span-2" : ""
              }`}
            >
              <div className="relative h-40 overflow-hidden rounded-xl">
                <img
                  src={data.image}
                  alt={`Gunung ${data.name}`}
                  className="object-cover w-full h-full transition duration-500 ease-in-out rounded-md group-hover:scale-125 group-hover:rotate-6"
                />
                <div className="absolute bottom-0 left-0 right-0 w-full h-16 p-2 text-white">
                  <h4 className="font-semibold">{data.name}</h4>
                  <span className="text-xs">{data.height} mdpl</span> |{" "}
                  <span className="text-xs">{data.trackCount} Jalur</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
