export default function SimaksiSection() {
  return (
    <section className="container mt-32">
      <header className="text-center text-skyBlueColor">
        <h2 className="mb-8 text-2xl font-bold lg:text-4xl">Simaksi</h2>
        <p className="text-sm font-light lg:text-xl">
          Simaksi adalah singkatan dari{" "}
          <strong className="font-semibold">
            Surat Izin Masuk Kawasan Konservasi
          </strong>{" "}
          . Surat ini merupakan dokumen resmi yang wajib dimiliki oleh siapa pun
          yang ingin melakukan kegiatan seperti pendakian, penelitian, atau
          wisata alam di kawasan konservasi, seperti gunung, hutan lindung, atau
          cagar alam. Lakukan registrasi di{" "}
          <strong className="font-semibold">menu Gunung</strong> dan dapatkan
          simaksi sebelum melakukan pendakian.
        </p>
        <a
          href="/gunung"
          className="inline-block py-2 mt-5 font-semibold text-white rounded-md bg-glass ms-2 text-md px-7 hover:bg-white hover:text-black"
        >
          Pelajari lebih lanjut
        </a>
      </header>
    </section>
  );
}
