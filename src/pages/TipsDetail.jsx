import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";

import iconArrow from "../../public/icon-arrow.png";

import img1 from "../../public/content-tips/img-1.jpg";
import img2 from "../../public/content-tips/img-2.jpg";
import img3 from "../../public/content-tips/img-3.jpg";
import img4 from "../../public/content-tips/img-4.jpg";
import img5 from "../../public/content-tips/img-5.jpg";
import img6 from "../../public/content-tips/img-6.jpg";
import img7 from "../../public/content-tips/img-7.jpg";
import img8 from "../../public/content-tips/img-8.jpg";
import img9 from "../../public/content-tips/img-9.jpg";
import img10 from "../../public/content-tips/img-10.jpg";

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

export default function TipsDetail() {
  const { id } = useParams();

  const data = datas.find((item) => item.id === parseInt(id));

  if (!data) {
    return <p className="text-white">Data tidak ditemukan</p>;
  }
  useEffect(() => {
    console.log("ok");
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <div className="bg-[#050902] h-full pb-16">
      <Navbar />
      <section className="pt-32 ">
        <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto">
          <div className="relative overflow-hidden rounded-md h-72">
            <img
              src={data.image}
              alt=""
              className="object-cover w-full h-full"
            />

            <Link
              to={`/tips`}
              className="absolute flex items-center justify-center w-10 h-10 rounded-full top-4 left-4 bg-glass"
            >
              <img src={iconArrow} alt="" className="w-6" />
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto my-5">
        <header className="text-white">
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <p className="mt-3 font-light text-slate-400 font-sm">{data.date}</p>
        </header>
      </section>

      <section className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto mt-10 font-light text-slate-300">
        <p className="mb-3">{data.description}</p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          tempora quod placeat consequatur eligendi quisquam ex deserunt eum quo
          natus minima dolores nulla nihil et, officiis perspiciatis optio
          commodi atque corrupti est. Odio rerum, magnam facilis deleniti
          assumenda dolor fugit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam recusandae, rerum qui rem est illum nisi. Ad
          dolores, debitis quod veniam enim inventore neque doloremque quis amet
          est dolorum aliquid perferendis architecto voluptatem at hic adipisci
          ut. Asperiores nihil quo reiciendis exercitationem qui voluptatibus
          magnam rerum a facere! Ratione, iusto?
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          pariatur blanditiis nobis saepe sequi fuga repellendus ex, consequatur
          laudantium odit quibusdam est. Quis, repellendus repudiandae, quia non
          ex minima sint nesciunt, quaerat sed nemo molestias pariatur sit quod
          perferendis! Exercitationem soluta necessitatibus culpa ratione modi,
          facilis facere minus, distinctio quidem esse nesciunt delectus
          voluptatibus obcaecati? Porro ex pariatur quibusdam nisi illo iure
          excepturi fugit impedit esse amet rerum, molestiae explicabo!
        </p>

        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          porro est veniam vitae, quas nemo. Odio aperiam quisquam enim, laborum
          atque praesentium nemo perferendis unde quasi in! Reprehenderit
          delectus exercitationem deleniti nisi voluptate aspernatur, voluptas
          in. Repellat obcaecati sapiente provident, enim, nobis commodi
          inventore exercitationem nihil, tenetur quo architecto id. Perferendis
          repudiandae culpa tempore deleniti? Provident earum accusamus in rem,
          quas blanditiis ab. Amet numquam odit est tempora! Quae, optio. Et
          perspiciatis quod in recusandae quos consectetur incidunt neque
          dolores. Ipsam placeat totam eveniet nemo quod molestiae culpa odit
          recusandae, amet maxime exercitationem ex. Laborum doloremque ratione
          corrupti tempora debitis!
        </p>
      </section>
    </div>
  );
}
