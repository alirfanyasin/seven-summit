import { Navbar } from "../components/Navbar";
import iconMountain from "../../public/icon-mountain.png";
import iconWeather from "../../public/icon-weather.png";
import iconSearch from "../../public/icon-search.png";

export default function HeroSection() {
  return (
    <section className="h-screen bg-center bg-cover bg-heroImage">
      <Navbar />
      <div className="container flex items-center justify-center h-screen ">
        <div className="mt-32 text-center text-white">
          <h1 className="text-4xl font-bold lg:text-7xl md:text-5xl">
            Nikmati Seven Summit <br /> di Jawa Timur
          </h1>
          <p className="mt-10 text-sm font-light lg:text-2xl md:text-xl">
            Nikmati pengalaman mendaki tujuh puncak tertinggi di Jawa Timur{" "}
            <br />
            dengan informasi lengkap dan akurat dari kami!
          </p>

          <div className="max-w-[60em] mt-32 mx-auto">
            <form
              action=""
              className="grid grid-cols-5 gap-2 p-5 md:gap-4 bg-glass rounded-xl"
              id="main-searching"
            >
              <div className="flex items-center justify-center col-span-2 gap-2 md:gap-4">
                <img
                  src={iconMountain}
                  alt=""
                  className="w-6 md:w-10 lg:w-20"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-5 text-sm text-white bg-transparent md:h-10 md:text-xl"
                  placeholder="Nama gunung"
                />
              </div>

              <div className="flex items-center justify-center col-span-2 gap-2 md:gap-4">
                <img src={iconWeather} alt="" className="w-6 md:w-10 lg:w-20" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-5 text-sm text-white bg-transparent md:h-10 md:text-xl"
                  placeholder="Nama kota"
                />
              </div>

              <button className="flex items-center justify-center w-full col-span-1 gap-4 p-2 bg-white rounded-lg md:p-0">
                <img src={iconSearch} alt="" className="w-5 md:w-5 lg:w-10" />
                <span className="hidden font-bold text-black md:block">
                  Cari
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
