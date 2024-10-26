import rute from "../../public/rute.png";
export default function AboutSection() {
  return (
    <>
      <section className="mb-52 bg-pattern bg-cover">
        <div className="flex justify-center items-center gap-4 h-[800px] container">
          <div className="basis-1/2 flex">
            <img src={rute} alt="" className="items-center rounded-xl" />
          </div>

          <div className="basis-1/2 ">
            <header className="text-[#9AB7DA]">
              <h2 className="text-4xl mb-8 font-bold">Tentang Kami</h2>
              <p className="font-light text-xl">
                Kami menyediakan informasi lengkap tentang tempat-tempat yang
                menawarkan persediaan perlengkapan pendakian di sekitar kawasan
                Seven Summit Jawa Timur. Dari penyewaan alat hingga pembelian
                perlengkapan, semua bisa Anda temukan dengan mudah.
              </p>
            </header>
          </div>
        </div>
      </section>
    </>
  );
}
