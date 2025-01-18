import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

export default function TipsDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data JSON
    fetch("/content-tips/datas-content.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal memuat data");
        }
        return response.json();
      })
      .then((datas) => {
        const result = datas.find((item) => item.id === parseInt(id));
        if (!result) {
          setError("Data tidak ditemukan");
        } else {
          setData(result);
        }
      })
      .catch((err) => {
        setError(err.message);
      });

    window.HSStaticMethods.autoInit();
  }, []);

  if (error) {
    return <p className="text-white">{error}</p>;
  }

  if (!data) {
    return <p className="text-white">Memuat...</p>;
  }

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
        <section>{data.content}</section>
      </section>
    </div>
  );
}
