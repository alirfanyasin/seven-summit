import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import semeruImg from "../../public/semeru.jpg";
import arjunoImg from "../../public/arjuno.jpg";
import raungImg from "../../public/raung.jpg";
import welirangImg from "../../public/welirang.jpg";
import argopuroImg from "../../public/argopuro.jpeg";
import lawuImg from "../../public/lawu.jpg";
import butakImg from "../../public/butak.jpg";
import iconLocation from "../../public/icon-location.png";
import iconHeight from "../../public/icon-height.png";
import iconRute from "../../public/icon-rute.png";

export default function Mountain() {
  const [bgClass, setBgClass] = useState("bg-heroImage2");
  const [selectedMountain, setSelectedMountain] = useState(null);

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

  const handleCardClick = (data) => {
    setBgClass(data.bgClass);
    setSelectedMountain(data); // Update selected mountain
  };

  // Set default selected mountain to the first item if none is selected
  const defaultMountain = datas[0];
  const mountainToDisplay = selectedMountain || defaultMountain;

  return (
    <main className={`h-screen bg-center bg-cover ${bgClass}`}>
      <Navbar />

      <div className="container flex flex-wrap items-center justify-center h-screen">
        <header
          className={`w-full text-center text-darkGreenColor mb-52 ${
            bgClass === "bg-heroImage2" ? "block" : "hidden"
          }`}
        >
          <h1 className="mb-5 font-bold capitalize text-7xl">
            7 Gunung Jawa Timur
          </h1>
          <p className="text-xl">
            Mari jelajahi keindahan alam di Jawa Timur dengan menaklukkan 7
            gunung <br /> bersama petualangan seru yang menanti di setiap
            langkahmu
          </p>
        </header>

        <div className={bgClass !== "bg-heroImage2" ? "block" : "hidden"}>
          {mountainToDisplay && (
            <div className="flex items-center justify-between gap-6 mb-52">
              <div className="text-white basis-7/12">
                <h1 className="text-6xl font-bold">
                  Gunung {mountainToDisplay.name}
                </h1>
                <p className="mt-5 text-xl font-light">
                  {mountainToDisplay.description}
                </p>
              </div>
              <div className="flex flex-col basis-5/12">
                <div className="flex items-center justify-end gap-3 mb-3 text-white">
                  <div className="text-xl font-light">
                    {mountainToDisplay.address}
                  </div>
                  <div className="flex items-center justify-center rounded-full w-14 h-14 bg-glass ">
                    <img
                      src={iconLocation}
                      alt="Location Icon"
                      className="w-8"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mb-3 text-white">
                  <div className="text-xl font-light">
                    {mountainToDisplay.height} mdpl
                  </div>
                  <div className="flex items-center justify-center rounded-full w-14 h-14 bg-glass ">
                    <img src={iconHeight} alt="Height Icon" className="w-8" />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mb-3 text-white">
                  <div className="text-xl font-light">
                    <ul className="text-end">
                      {mountainToDisplay.track.length > 0 ? (
                        mountainToDisplay.track.map((track, index) => (
                          <li key={index}>{`Jalur ${track}`}</li>
                        ))
                      ) : (
                        <li>Tidak ada jalur yang tersedia</li>
                      )}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center rounded-full w-14 h-14 bg-glass ">
                    <img src={iconRute} alt="Route Icon" className="w-6" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <section className="flex w-[80%] absolute gap-3 overflow-x-auto flex-nowrap bottom-10">
          {datas.map((data, index) => (
            <div
              key={index}
              className="w-full p-4 bg-glass hover:cursor-pointer rounded-xl group"
              onClick={() => handleCardClick(data)}
            >
              <div className="relative overflow-hidden rounded-xl h-52">
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
        </section>
      </div>
    </main>
  );
}