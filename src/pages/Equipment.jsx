import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import iconSearch from "../../public/icon-search.png";

export default function Equipment() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  const [selectMountain, setSelectMountain] = useState(
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d252837.18732145388!2d112.89465671660456!3d-8.042054528404378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sperlengkapan%20pendakian%20semeru!5e0!3m2!1sid!2sid!4v1730120350827!5m2!1sid!2sid"
  );

  const handleInputMountain = (event) => {
    setSelectMountain(event.target.value);
  };

  return (
    <div className="bg-[#040A16]">
      <section className="h-screen bg-center bg-cover bg-heroImage3">
        <Navbar />

        <div className="container flex items-center justify-center h-screen">
          <div className="w-full text-center">
            <header className="mb-20 text-white">
              <h1 className="mb-4 text-3xl font-bold lg:text-5xl md:text-4xl">
                Perlengkapan & Peralatan <br /> Pendakian
              </h1>
              <p className="font-light">
                Cari perlengkapan pendakian di kota terdekat
              </p>
            </header>
            <form action="" className="w-[70%] mx-auto">
              <div className="flex items-center justify-between w-full gap-4 p-4 bg-glass rounded-xl">
                <select
                  name=""
                  id=""
                  className="w-full h-5 text-sm text-center text-white bg-transparent md:h-10 md:text-xl"
                  onChange={handleInputMountain}
                >
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d506155.25315633847!2d112.61382415452883!3d-7.646764577266997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20semeru!5e0!3m2!1sid!2sid!4v1730121066757!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Semeru
                  </option>
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d506157.1641810594!2d112.61382195511761!3d-7.645153166411636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20arjuno!5e0!3m2!1sid!2sid!4v1730121094550!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Arjuno
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2024006.8358720834!2d111.07232337135619!3d-7.775151006637728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20raung!5e0!3m2!1sid!2sid!4v1730121118962!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Raung
                  </option>
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d506153.3416763188!2d112.61382635393176!3d-7.648376034432379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20welirang!5e0!3m2!1sid!2sid!4v1730121003629!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Welirang
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253147.54142928618!2d112.64818815425853!3d-7.528271014953579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20lawu!5e0!3m2!1sid!2sid!4v1730120965214!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Lawu
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253067.0358378944!2d112.85064812533398!3d-7.664602634816423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20argopuro!5e0!3m2!1sid!2sid!4v1730120888755!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Argopuro
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d506169.1259639389!2d112.18733338951064!3d-7.635059092352113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soutdor%20rental%20gunung%20butak!5e0!3m2!1sid!2sid!4v1730120917984!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Butak
                  </option>
                </select>
                {/* <button className="flex items-center justify-center h-10 bg-white rounded-md basis-2/12">
                  <img src={iconSearch} alt="" className="w-5" />
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="container relative -top-[200px]">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src={selectMountain}
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
