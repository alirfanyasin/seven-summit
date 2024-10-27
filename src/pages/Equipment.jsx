import React from "react";
import { Navbar } from "../components/Navbar";
import iconSearch from "../../public/icon-search.png";

export default function Equipment() {
  return (
    <div className="bg-[#040A16]">
      <section className="h-screen bg-center bg-cover bg-heroImage3">
        <Navbar />

        <div className="container flex items-center justify-center h-screen">
          <div className="w-full text-center">
            <header className="mb-20 text-white">
              <h1 className="mb-4 text-3xl font-bold lg:text-5xl md:text-4xl">
                Perlengkapan Pendakian
              </h1>
              <p className="font-light">
                Cari perlengkapan pendakian di kota terdekat
              </p>
            </header>
            <form action="" className="w-[70%] mx-auto">
              <div className="flex items-center justify-between w-full gap-4 p-4 bg-glass rounded-xl">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-10 p-2 text-white bg-transparent"
                  placeholder="Masukkan nama kota"
                />
                <button className="flex items-center justify-center h-10 bg-white rounded-md basis-2/12">
                  <img src={iconSearch} alt="" className="w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="container relative -top-[200px]">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63221.49442465821!2d112.5374123143157!3d-7.963418625815181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882874913b1ff%3A0x31188b3961fa90bd!2sSemeru%20Adventure!5e0!3m2!1sid!2sid!4v1730050292154!5m2!1sid!2sid"
            allowfullscreen=""
            width="100%"
            height="600px"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
