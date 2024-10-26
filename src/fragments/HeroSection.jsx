import { Navbar } from "../components/Navbar";

export default function HeroSection() {
  return (
    <section className="bg-heroImage bg-cover bg-center h-screen">
      <Navbar />
      <div className="container h-screen flex justify-center items-center ">
        <div className="text-center text-white mt-32">
          <h1 className="text-8xl font-bold">
            Nikmati Seven Summit <br /> di Jawa Timur
          </h1>
          <p className="font-light text-xl mt-10">
            Nikmati pengalaman mendaki tujuh puncak tertinggi di Jawa Timur{" "}
            <br />
            dengan informasi lengkap dan akurat dari kami!
          </p>

          <div className="max-w-[60em] mt-32 mx-auto">
            <form
              action=""
              className="bg-glass p-5 grid grid-cols-5 gap-4 rounded-xl"
              id="main-searching"
            >
              <div className="flex gap-4 justify-center items-center col-span-2">
                <iconify-icon
                  style={{ fontSize: "50px" }}
                  icon="la:mountain"
                ></iconify-icon>
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-10 text-white bg-transparent text-xl w-full"
                  placeholder="Nama gunung"
                />
              </div>

              <div className="flex gap-4 justify-center items-center col-span-2">
                <iconify-icon
                  icon="fluent:weather-hail-day-20-regular"
                  style={{ fontSize: "50px" }}
                ></iconify-icon>
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-10 text-white bg-transparent text-xl w-full"
                  placeholder="Nama kota"
                />
              </div>

              <button className="flex gap-4 justify-center items-center col-span-1 bg-white rounded-lg w-full">
                <iconify-icon
                  icon="ri:search-line"
                  style={{ fontSize: "30px", color: "black" }}
                ></iconify-icon>
                <span className="text-black font-bold">Cari</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
