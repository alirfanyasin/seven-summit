import { Navbar } from "../components/Navbar";
import img1 from "../../public/img-1.jpg";
import img2 from "../../public/img-2.jpg";
import img3 from "../../public/img-3.jpg";
import img4 from "../../public/img-4.jpg";
import img5 from "../../public/img-5.jpg";
import img6 from "../../public/img-6.jpg";
import img7 from "../../public/img-7.jpg";
import img8 from "../../public/img-8.jpg";
import img9 from "../../public/img-9.jpg";
import img10 from "../../public/img-10.jpg";
import { useEffect, useState } from "react";

export default function Tips() {
  const [filter, setFilter] = useState("semua");

  useEffect(() => {
    console.log("ok");
    window.HSStaticMethods.autoInit();
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const datas = [
    {
      id: 1,
      title: "Tips Pendakian Bagi Pemula",
      description:
        "Panduan lengkap untuk pendaki pemula, mulai dari persiapan fisik hingga mental yang dibutuhkan saat mendaki.",
      image: img1,
      date: "2 November 2024",
      level: "pemula",
    },
    {
      id: 2,
      title: "Mengenal Perlengkapan Dasar Pendakian",
      description:
        "Perlengkapan wajib untuk pendaki pemula yang ingin mendaki dengan aman dan nyaman.",
      image: img2,
      date: "5 November 2024",
      level: "pemula",
    },
    {
      id: 3,
      title: "Cara Mengatur Waktu dan Jadwal Pendakian",
      description:
        "Kiat penting mengatur jadwal pendakian agar perjalanan lancar dan aman bagi pemula.",
      image: img3,
      date: "7 November 2024",
      level: "pemula",
    },
    {
      id: 4,
      title: "Memilih Sepatu Pendakian yang Tepat",
      description:
        "Langkah-langkah memilih sepatu pendakian yang sesuai dengan medan dan tingkat kenyamanan.",
      image: img4,
      date: "10 November 2024",
      level: "menengah",
    },
    {
      id: 5,
      title: "Strategi Bertahan di Cuaca Ekstrem",
      description:
        "Panduan menghadapi cuaca ekstrem saat pendakian, termasuk tips bertahan dalam suhu rendah.",
      image: img5,
      date: "12 November 2024",
      level: "menengah",
    },
    {
      id: 6,
      title: "Panduan Navigasi dan Membaca Peta",
      description:
        "Cara membaca peta dan kompas untuk pendaki tingkat menengah yang ingin mandiri di jalur pendakian.",
      image: img6,
      date: "15 November 2024",
      level: "menengah",
    },
    {
      id: 7,
      title: "Teknik Survival di Gunung",
      description:
        "Kemampuan survival dasar dan lanjutan untuk menghadapi situasi darurat saat mendaki gunung.",
      image: img7,
      date: "20 November 2024",
      level: "profesional",
    },
    {
      id: 8,
      title: "Penyusunan Perlengkapan untuk Ekspedisi Panjang",
      description:
        "Tips packing dan manajemen perlengkapan untuk ekspedisi pendakian panjang atau berhari-hari.",
      image: img8,
      date: "25 November 2024",
      level: "profesional",
    },
    {
      id: 9,
      title: "Memilih Jalur Pendakian Ekstrem untuk Pendaki Profesional",
      description:
        "Rekomendasi jalur pendakian ekstrem dan tantangan yang cocok untuk pendaki profesional.",
      image: img9,
      date: "28 November 2024",
      level: "profesional",
    },
    {
      id: 10,
      title: "Mengelola Risiko dan Keamanan Saat Pendakian Solo",
      description:
        "Panduan lengkap tentang manajemen risiko dan keamanan saat melakukan pendakian solo.",
      image: img10,
      date: "30 November 2024",
      level: "profesional",
    },
  ];

  return (
    <div className="bg-[#050902] h-full">
      <section className="bg-center bg-cover h-[600px] bg-heroImage5">
        <Navbar />

        <header className="container flex items-center justify-center h-full gap-4 text-center">
          <div className="text-white lg:w-[60%] w-full">
            <h1 className="text-5xl font-bold">Tips Pendakian</h1>
            <p className="mt-5 font-light">
              Baca artikel terkait tips dan cara yang baik dan benar untuk
              pendaki tingkat pemula, menengah dan profesional
            </p>
          </div>
        </header>
      </section>

      <section className="container pb-20 -mt-32">
        <div className="flex justify-end ">
          <select
            name="filter"
            id="filter"
            className="p-3 mb-5 text-white rounded-md bg-glass"
            onChange={handleFilter}
          >
            <option value="semua" className="text-black">
              Semua
            </option>
            <option value="pemula" className="text-black">
              Pemula
            </option>
            <option value="menengah" className="text-black">
              Menengah
            </option>
            <option value="profesional" className="text-black">
              Profesional
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {datas
            .filter((data) => filter === "semua" || data.level === filter)
            .map((data, index) => (
              <a
                href={`tips/${data.id}`}
                className="block p-3 card bg-glass rounded-xl group"
                key={index}
              >
                <div className="w-full h-40 overflow-hidden rounded-md">
                  <img
                    src={data.image}
                    alt=""
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="mt-4 text-white">
                  <h2 className="mb-3 text-xl font-semibold">{data.title}</h2>
                  <p className="font-light text-md text-slate-400">
                    {data.description}
                  </p>
                </div>
                <p className="mt-3 font-light text-slate-600 font-sm">
                  {data.date}
                </p>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}
