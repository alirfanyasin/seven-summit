import rute from "../../public/peta-jawa-timur.png";
export default function AboutSection() {
  return (
    <>
      <section className="mb-20 bg-cover md:mb-52 bg-pattern">
        <div className="flex justify-center items-center gap-4 lg:h-[800px] h-72 container">
          <div className="hidden basis-1/2 lg:block">
            <img src={rute} alt="" className="items-center rounded-xl" />
          </div>

          <div className="lg:basis-1/2 basis-full">
            <header className="text-skyBlueColor">
              <h2 className="mb-8 text-2xl font-bold lg:text-4xl">
                Tentang Kami
              </h2>
              <p className="text-sm font-light lg:text-xl">
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
