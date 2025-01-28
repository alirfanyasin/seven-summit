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
import img12 from "../../public/content-tips/img-12.jpg";
import img13 from "../../public/content-tips/img-13.jpg";
import img14 from "../../public/content-tips/img-14.jpg";
import img16 from "../../public/content-tips/img-16.jpg";
import img17 from "../../public/content-tips/img-17.jpg";
import img18 from "../../public/content-tips/img-18.jpg";
import img19 from "../../public/content-tips/img-19.jpg";
import img20 from "../../public/content-tips/img-20.jpg";
import img21 from "../../public/content-tips/img-21.jpg";
import img22 from "../../public/content-tips/img-22.jpg";
import img23 from "../../public/content-tips/img-23.jpg";
import img24 from "../../public/content-tips/img-24.jpg";
import img25 from "../../public/content-tips/img-25.png";
import img26 from "../../public/content-tips/img-26.jpg";
import img27 from "../../public/content-tips/img-27.jpg";
import img28 from "../../public/content-tips/img-28.jpg";
import img29 from "../../public/content-tips/img-29.jpg";
import img30 from "../../public/content-tips/img-30.jpg";
import img31 from "../../public/content-tips/img-31.jpg";
import img32 from "../../public/content-tips/img-32.jpg";
import img33 from "../../public/content-tips/img-33.jpg";
import img34 from "../../public/content-tips/img-34.jpg";
import img35 from "../../public/content-tips/img-35.png";
import img36 from "../../public/content-tips/img-36.jpg";
import img37 from "../../public/content-tips/img-37.jpg";
import img38 from "../../public/content-tips/img-38.jpg";
import img39 from "../../public/content-tips/img-39.jpg";
import img40 from "../../public/content-tips/img-40.jpg";
import img41 from "../../public/content-tips/img-41.jpg";
import img42 from "../../public/content-tips/img-42.jpg";
import img43 from "../../public/content-tips/img-43.jpg";
import img44 from "../../public/content-tips/img-44.jpg";
import img45 from "../../public/content-tips/img-45.jpg";
import img46 from "../../public/content-tips/img-46.jpg";
import img47 from "../../public/content-tips/img-47.jpg";
import img48 from "../../public/content-tips/img-48.jpg";
import img49 from "../../public/content-tips/img-49.png";
import img50 from "../../public/content-tips/img-50.jpg";
import img51 from "../../public/content-tips/img-51.jpg";
import img52 from "../../public/content-tips/img-52.png";

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
    return <p className="text-black">{error}</p>;
  }

  if (!data) {
    return <p className="text-black">Memuat...</p>;
  }

  if (data) {
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
            <p className="mt-3 font-light text-slate-400 font-sm">
              {data.date}
            </p>
          </header>
        </section>

        <section className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] mx-auto mt-10 font-light text-slate-300">
          <p className="mb-3">{data.description}</p>

          {data.id !== 11 && <section>{data.content}</section>}
          {data.id !== 12 && <section>{data.content}</section>}
          {data.id !== 13 && <section>{data.content}</section>}
          {data.id !== 14 && <section>{data.content}</section>}
          {data.id !== 15 && <section>{data.content}</section>}

          {data.id === 11 && (
            <section className="mt-10">
              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  1. Mendaki Wajib dengan Persiapan yang Memadai
                </h2>
                <p className="mb-3">
                  Persiapan fisik, mental, dan logistik sangat penting sebelum
                  melakukan pendakian. Tanpa persiapan yang baik, risiko cedera,
                  tersesat, dan kelelahan menjadi lebih tinggi. Berikut beberapa
                  tips untuk mempersiapkan diri sebelum mendaki:
                </p>
                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Latihan Fisik: Jauh-jauh hari, lakukan latihan kardio,
                    kekuatan otot, dan stabilitas untuk meningkatkan daya tahan
                    tubuh.
                  </li>
                  <li>
                    Riset tentang Gunung: Ketahui karakteristik jalur pendakian,
                    cara daftar simaksi, kondisi cuaca terkini, dan potensi
                    bahaya di gunung yang akan didaki.
                  </li>
                  <li>
                    Packing Peralatan: Pastikan membawa perlengkapan yang
                    sesuai, seperti pakaian hangat, pakaian ganti, sepatu gunung
                    terbaik, jaket gunung, tas carrier waterproof, peta offline,
                    kompas, senter, kotak P3K, makanan, dan air yang cukup.
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  2. Pilih Jalur Pendakian yang Tepat dan Ramah untuk Pemula
                </h2>
                <p className="mb-3">
                  Sebaiknya jangan memimpikan pengalaman naik gunung untuk
                  pemula dengan jalur pendakian yang menantang. Hal yang terbaik
                  adalah memilih jalur pendakian yang sesuai dengan tingkat
                  kebugaran fisikmu saat ini. Jangan terpaku dengan pencapaian
                  orang lain, fokuslah pada diri sendiri dan mulailah dari yang
                  sesuai dengan kemampuanmu.
                </p>
                <p className="mb-3">
                  Saat memilih jalur pendakian, perhatikan jarak, ketinggian
                  medan, tingkat kesulitan, dan kenali pos-pos pendakian untuk
                  beristirahat sepanjang trek. Kamu bisa menjadikan buku
                  panduan, blog, atau bertanya kepada teman yang berpengalaman
                  sebagai sumber informasi terbaik.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  3. Pantau Kondisi Cuaca dan Lingkungan
                </h2>
                <p className="mb-3">
                  Memantau perkiraan cuaca sebelum dan selama pendakian sangat
                  penting untuk keselamatan. Jika cuaca sangat buruk dan
                  mengancam keselamatan diri, disarankan untuk tidak melanjutkan
                  pendakian. Apalagi jika tidak diantisipasi dengan baik
                  sebelumnya, maka cuaca yang dingin ditambah dengan pakaian
                  basah karena hujan atau air hujan yang merembes ke dalam
                  perlengkapan tidur dapat menyebabkan hipotermia.
                </p>
                <p className="mb-3">
                  Tips menghadapi cuaca yang kurang bersahabat di gunung adalah
                  pertama, cari tempat berlindung yang aman. Kenakan pakaian
                  yang quick dry sesuai dengan kondisi cuaca untuk menjaga tubuh
                  tetap hangat dan kering.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  4. Perhatikan Setiap Langkah Kaki
                </h2>

                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img12} alt="" />
                </div>

                <p className="mb-3">
                  Selalu perhatikan setiap langkah kaki selama di jalur
                  pendakian. Risiko terbesar yang dihadapi saat trekking adalah
                  melangkah di tempat yang salah. Ini artinya jika tidak
                  berhati-hati, pergelangan kaki dapat terkilir, terpeleset di
                  batu, hingga tersandung akar. Oleh karena itu, selama
                  trekking, selalu perhatikan setiap langkahmu terutama jika
                  kelelahan, sambil mengobrol atau memakai headphone. Jika kamu
                  merasa lelah, beristirahatlah secukupnya dan jangan memaksakan
                  diri.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  5. Berhentilah dan Istirahatlah
                </h2>

                <p className="mb-3">
                  Mendaki gunung memang membutuhkan stamina dan daya tahan tubuh
                  yang kuat. Namun, penting untuk diingat jika memaksakan diri
                  untuk terus mendaki saat merasa lelah justru dapat
                  membahayakan diri sendiri. Oleh karena itu, dengarkanlah
                  tubuhmu dan jangan sampai terlalu kelelahan. Jika kamu merasa
                  lelah, segera putuskan untuk berhenti dan istirahat.
                </p>
                <p className="mb-3">
                  Istirahat akan memberi waktu bagi tubuhmu untuk memulihkan
                  energi dan stamina yang menurun agar bisa melanjutkan
                  pendakian dengan aman. Jika terlalu kelelahan, kamu bisa
                  kehilangan fokus, koordinasi, dan kekuatan yang berisiko
                  tersandung, terjatuh, atau bahkan kecelakaan yang lebih
                  serius. Maka ingatlah, keselamatan adalah hal yang utama dalam
                  pendakian.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  6. Dilarang Membuang Sampah Sembarangan
                </h2>

                <p className="mb-3">
                  Sampah yang ditinggalkan di gunung dapat merusak lingkungan,
                  mencemari air, dan mengganggu kehidupan satwa liar yang hidup
                  di habitat alaminya. Oleh karena itu, penting untuk selalu
                  membawa pulang sampah sendiri dan mengikuti prinsip “Leave No
                  Trace”. Perlu dipahami, beberapa pengelola gunung
                  memberlakukan aturan ketat kepada pendaki untuk membawa turun
                  kembali sampah dari gunung demi menjaga keberlanjutan
                  lingkungan. Beberapa tips untuk mengurangi sampah saat
                  mendaki:
                </p>
                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Bawa Tempat Makanan & Tumbler yang Bisa Digunakan Kembali:
                    Hindari penggunaan kemasan sekali pakai.
                  </li>
                  <li>
                    Bawa Kantong Sampah: Simpan sampah di kantong khusus dan
                    bawa pulang kembali.
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  7. Selalu Bersama Kelompok selama Pendakian
                </h2>

                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img13} alt="" />
                </div>

                <p className="mb-3">
                  Pendakian solo sangat tidak disarankan apabila kamu baru
                  pertama kali mendaki dan belum berpengalaman sama sekali.
                  Meskipun sudah pernah naik gunung sebelumnya, saat
                  merencanakan pendakian, ajaklah minimal satu orang teman atau
                  guide lokal untuk menemani pendakianmu.
                </p>
                <p className="mb-3">
                  Selama pendakian, jangan sekali-kali terpisah dari kelompok
                  karena dapat meningkatkan risiko tersesat dan sulit
                  mendapatkan bantuan. Penting untuk tetap bersama kelompok dan
                  menjaga komunikasi selama di jalur pendakian.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  8. Bekali Diri dengan Pengetahuan Pertolongan Pertama Dasar
                </h2>

                <p className="mb-3">
                  Pengetahuan pertolongan pertama dasar penting bagi pendaki
                  untuk menangani situasi darurat. Bawalah kotak P3K berisi
                  antiseptik, kasa, perban, plester, obat-obatan umum, pinset,
                  gunting, sarung tangan karet, dan buku panduan pertolongan
                  pertama. Pastikan mengetahui cara menggunakannya dan sesuaikan
                  isi kotak P3K dengan kebutuhan.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  9. Nikmati Perjalanan dan Ukur Kecepatan Diri Sendiri
                </h2>

                <p className="mb-3">
                  Ingatlah, pendakian bukan tentang mencapai tujuan secepat
                  mungkin, tapi tentang menikmati perjalanannya. Berlomba-lomba
                  untuk cepat sampai ke air terjun, pemandangan indah, atau
                  puncak gunung hanya akan membuatmu kehilangan esensi pendakian
                  itu sendiri.
                </p>
                <p className="mb-3">
                  Lebih baik bergerak dengan kecepatan yang kamu rasa nyaman,
                  nikmati indahnya pemandangan, dan berhentilah untuk
                  beristirahat saat kamu membutuhkannya. Dengan begitu, kamu
                  akan benar-benar menikmati pendakian dan masih memiliki cukup
                  energi untuk merayakan pencapaianmu saat sampai di puncak.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  10. Menjaga Habitat Flora dan Fauna
                </h2>

                <p className="mb-3">
                  Menjaga keanekaragaman hayati di gunung sangat penting. Jangan
                  memetik bunga atau mengganggu hewan liar karena dapat merusak
                  ekosistem dan membahayakan diri sendiri. Tips untuk
                  menghormati alam dan habitat makhluk hidup pertama cukup
                  dengan mengamati dari jarak aman dan jangan mendekati atau
                  memberi makan hewan liar. Usahakan sekali jangan meninggalkan
                  jejak dengan merusak tanaman atau mengganggu habitat hewan.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  11. Hindari Melakukan Tindakan Berisiko
                </h2>

                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img14} alt="" />
                </div>

                <p className="mb-3">
                  Tindakan nekat di gunung, seperti memanjat tebing tanpa
                  perlindungan atau berenang di sungai deras, sangat berbahaya.
                  Utamakan keselamatan dengan menghindari risiko yang tidak
                  perlu dan mengikuti aturan serta petunjuk keselamatan. Selalu
                  perhatikan dan waspada terhadap potensi bahaya yang mungkin
                  terjadi, seperti cuaca buruk, satwa liar, atau longsor.
                </p>
                <p className="mb-3">
                  Sekali lagi, tips untuk menjaga keselamatan saat mendaki
                  adalah dengan menggunakan peralatan mountaineering yang sesuai
                  dan dalam kondisi baik. Ini termasuk sepatu gunung yang tepat,
                  tas waterproof, pakaian berlapis sesuai cuaca, peta, kompas,
                  headlamp, P3K, dan persediaan makanan dan minuman.
                </p>

                <p className="mb-3">
                  Waspadai medan yang berpotensi bahaya seperti tanjakan curam,
                  medan berbatu, turunan terjal, dan sungai. Gunakan teknik
                  pendakian yang benar dan peralatan pendukung seperti trekking
                  pole untuk menjaga keseimbangan.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  12. Beritahu Orang Lain tentang Rencana Pendakian
                </h2>

                <p className="mb-3">
                  Memberitahu orang lain tentang rencana pendakian sangat
                  penting untuk memudahkan pencarian jika terjadi sesuatu.
                  Informasi yang perlu disampaikan meliputi tujuan pendakian,
                  perkiraan waktu, anggota kelompok, dan kontak darurat. Tips
                  untuk berkomunikasi dengan orang lain selama pendakian:
                </p>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Berikan Pembaruan Secara Berkala: Informasikan posisi dan
                    kondisi kepada orang yang dipercaya.
                  </li>
                  <li>
                    Gunakan Alat Komunikasi yang Tepat: Bawa ponsel, Handy
                    Talky, atau alat komunikasi lainnya.
                  </li>
                </ul>
              </div>
            </section>
          )}

          {data.id === 12 && (
            <section className="mt-10">
              <div className="mb-10">
                <p className="mb-3">
                  Mendaki gunung merupakan kegiatan yang tidak bisa disepelekan.
                  Diperlukan latihan dan persiapan yang matang sebelum mendaki.
                  Mempersiapkan hal yang diperlukan ketika mendaki, bertujuan
                  untuk keselamatan kita agar terjaga mulai dari berangkat
                  hingga pulang.
                </p>
                <p className="mb-3">
                  Salah satu hal yang harus diperhatikan sebelum mendaki adalah
                  mempersiapkan peralatan. Bagi para pendaki profesional yang
                  sudah terbiasa mendaki gunung, pasti mereka sudah paham dengan
                  peralatan yang mesti dibawa. Namun, untuk pendaki pemula yang
                  belum terbiasa mendaki, pasti sering bertanya dengan peralatan
                  mendaki yang wajib untuk dibawa karena tidak tahu.
                </p>
                <p className="mb-3">
                  Peralatan juga menjadi salah satu faktor terpenting
                  keberhasilan dalam pendakian. Karena, dengan kurangnya
                  peralatan pendakian bisa berakibat fatal. Sedangkan membawa
                  peralatan yang berlebihan membuat carrier semakin berat,
                  sehingga menambah beban yang harus kamu bawa. Jadi sudah
                  semestinya kamu mempersiapkannya dengan benar-benar.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  Berikut Peralatan Mendaki Yang Wajib Kamu Bawa
                </h2>
                <p className="mb-3">
                  Untuk peralatan mendaki dibagi menjadi dua yaitu peralatan
                  kelompok dan peralatan pribadi.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold">Peralatan kelompok</h3>

                <h4 className="text-base font-semibold">1. Tenda</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img16} alt="" />
                </div>
                <p className="mb-3">
                  Tenda merupakan tempat untuk berteduh dan menginap ketika
                  mendaki. Tenda memiliki berbagai jenis, salah satu jenis yang
                  sering dipakai adalah tenda Dome. Jenis tenda Dome banyak
                  dipilih karena ketahanannya terhadap angin kencang dan mudah
                  dalam mensetup nya. Biasanya tenda mempunyai kapasitas untuk
                  2, 4, dan 6 orang.
                </p>

                <h4 className="text-base font-semibold">
                  2. Makanan yang dapat memenuhi kebutuhan kamu selama naik
                  gunung
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img17} alt="" />
                </div>
                <p className="mb-3">
                  Kegiatan naik gunung merupakan kegiatan yang memerlukan banyak
                  energi. Maka dari itu, penting sekali untuk mempersiapkan
                  makanan yang bergizi namun tetap praktis untuk dibawa. Makanan
                  yang bisa kamu bawa yaitu roti, nasi, nugget atau sosis, madu,
                  coklat, susu, kopi, gula jawa, antangin, buah-buahan,
                  umbi-umbian,dll.
                </p>

                <h4 className="text-base font-semibold">
                  3. Peralatan memasak
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img18} alt="" />
                </div>
                <p className="mb-3">
                  Kegiatan naik gunung merupakan kegiatan yang memerlukan banyak
                  energi. Maka dari itu, penting sekali untuk mempersiapkan
                  makanan yang bergizi namun tetap praktis untuk dibawa. Makanan
                  yang bisa kamu bawa yaitu roti, nasi, nugget atau sosis, madu,
                  coklat, susu, kopi, gula jawa, antangin, buah-buahan,
                  umbi-umbian,dll.
                </p>

                <h4 className="text-base font-semibold">
                  4. Peralatan komunikasi
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img19} alt="" />
                </div>
                <p className="mb-3">
                  Peralatan yang tidak kalah penting adalah komunikasi. Dengan
                  peralatan komunikasi, ketika dalam keadaan darurat kita bisa
                  memberi informasi atau meminta bantuan ke pihak basecamp.
                  Tapi, sebelumnya laporkan dulu ke tim pendakian mu terlebih
                  dahulu.
                </p>
                <p className="mb-3">
                  Kamu bisa menggunakan handy talky (HT) atau handphone. Namun,
                  ketika mendaki gunung tidak ada sinyal telepon jadi sebaiknya
                  menggunakan HT.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold">Peralatan Pribadi</h3>

                <h4 className="text-base font-semibold">1. Tas Gunung</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img20} alt="" />
                </div>
                <p className="mb-3">
                  Tas gunung atau biasa disebut carrier merupakan peralatan
                  utama yang harus dibawa ketika mendaki gunung. Tas ini sudah
                  didesain untuk membawa beban berat dengan bahan yang kuat. Tas
                  gunung mempunyai beberapa ukuran dan merk. Tiap merk tas
                  gunung mempunyai kelebihan masing-masing.
                </p>

                <h4 className="text-base font-semibold">
                  2. Pakaian ganti secukupnya berdasarkan lama waktu pendakian
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img21} alt="" />
                </div>
                <p className="mb-3">
                  Peralatan mendaki penting selanjutnya yang harus dipersiapkan
                  adalah pakaian ganti. Bawalah baju ganti yang mudah kering dan
                  berbahan katun. Sama dengan celana dengan bahan cepat kering
                  dan ringan seperti celana berbahan ripstok nilon atau bahan
                  Polyester. Jika bisa diusahakan untuk tidak memakai celana
                  jeans.
                </p>
                <p className="mb-3">
                  Untuk trek pendakian seperti 2 hari biasanya membawa 2-3 stell
                  pakaian. Sedikit tips sebaiknya membagi pakaian menjadi dua
                  yaitu pakaian mendaki dan pakaian tidur. Pada saat mendaki
                  gunakan pakaian yang mudah menyerap keringat dan cepat kering.
                  Sedangkan pada saat mau tidur gunakan pakaian tidur dan jemur
                  pakaian yang digunakan untuk mendaki agar bisa dipakai
                  besoknya lagi. Jangan lupa untuk membawa satu pakaian lagi
                  untuk berfoto di atas puncak.
                </p>

                <h4 className="text-base font-semibold">3. Jaket</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img22} alt="" />
                </div>
                <p className="mb-3">
                  Jaket yang dimaksud bukan jaket biasa. Melainkan, jaket yang
                  dikhususkan untuk mendaki gunung dengan bahan yang lebih
                  tebal. Jaket ini berfungsi untuk menghangatkan badan dan
                  menolak angin.
                </p>

                <h4 className="text-base font-semibold">4. Jas Hujan</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img23} alt="" />
                </div>
                <p className="mb-3">
                  Meskipun sedang tidak musim hujan, tetap harus membawa jas
                  hujan. untuk berjaga-jaga sebaiknya membawa jas hujan. Karena,
                  kita tidak tahu apa yang akan terjadi di gunung.
                </p>

                <h4 className="text-base font-semibold">5. Sleeping bag</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img24} alt="" />
                </div>
                <p className="mb-3">
                  Sleeping bag atau kantong tidur memiliki fungsi untuk
                  menghangatkan tubuh pada saat tidur, karena cuaca diluar yang
                  dingin. Perlu diketahui suhu di gunung lebih tinggi
                  dibandingkan daratan biasa. Maka dari itu, jangan lupa untuk
                  memasukkan sleeping bag kedalam list peralatan yang kamu bawa
                  ketika mendaki gunung.
                </p>

                <h4 className="text-base font-semibold">6. Sepatu Hiking</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img25} alt="" />
                </div>
                <p className="mb-3">
                  Peralatan yang wajib dibawa selanjutnya adalah sepatu hiking.
                  Kenapa tidak sepatu biasa saja? Sepatu hiking berbeda dengan
                  sepatu biasanya, Karena sudah didesain untuk menerjang medan
                  becek, lumpur, basah, berdebu, dan untuk trek jalan menanjak.
                </p>

                <h4 className="text-base font-semibold">7. Gaiters</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img26} alt="" />
                </div>
                <p className="mb-3">
                  Gaiters ditujukan untuk melindungi kaki dari ranting, duri,
                  binatang pacet atau lintah, dan mencegah pasir atau kerikil
                  masuk kedalam sepatu ketika berjalan.
                </p>

                <h4 className="text-base font-semibold">8. Trekking pole</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img27} alt="" />
                </div>
                <p className="mb-3">
                  Peralatan mendaki tongkat gunung atau trekking pole mempunyai
                  fungsi sebagai pegangan tangan dan menjaganya keseimbangan
                  tubuh.
                </p>

                <h4 className="text-base font-semibold">9. Kantong plastik</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img28} alt="" />
                </div>
                <p className="mb-3">
                  Peralatan yang satu ini seringkali dilewatkan para pendaki
                  yang mengaku pecinta alam tapi, masih belum bisa menjaga
                  kebersihan alam. Kantong plastik penting sekali dibawa dan
                  berguna untuk membawa sampah turun kebawah.
                </p>

                <h4 className="text-base font-semibold">
                  10. Senter atau headlamp
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img29} alt="" />
                </div>
                <p className="mb-3">
                  Senter atau headlamp merupakan peralatan yang digunakan untuk
                  menerangi jalan ketika melakukan pendakian pada malam hari.
                  Tidak hanya itu, senter atau headlamp bisa juga berfungsi
                  untuk menerangi tenda pada saat tidur.
                </p>

                <h4 className="text-base font-semibold">11. Sarung Tangan</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img30} alt="" />
                </div>
                <p className="mb-3">
                  Sarung tangan berfungsi agar tangan tidak kedinginan ketika di
                  gunung. Seperti yang kita tahu bahwa bagian tubuh yang paling
                  sensitif adalah telapak kaki dan telapak tangan. Sehingga
                  ketika berada pada suhu dingin namun telapak tangan terjaga
                  suhunya maka, tubuh juga akan menyesuaikan.
                </p>

                <h4 className="text-base font-semibold">12. Matras</h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img31} alt="" />
                </div>
                <p className="mb-3">
                  Matras ini juga penting untuk alas duduk atau tidur.
                </p>

                <h4 className="text-base font-semibold">
                  13. Membawa peralatan obat-obatan pribadi maupun P3K
                </h4>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img32} alt="" />
                </div>
                <p className="mb-3">
                  Jika kamu memiliki riwayat penyakit seperti asma, jantung atau
                  penyakit lainnya maka, diwajibkan untuk membawa obat-obatan
                  tersebut. Namun, jika tidak mempunyai riwayat penyakit
                  sebaiknya untuk tetap membawa P3K untuk berjaga-jaga dan
                  barangkali ada pendaki lain yang membutuhkan.
                </p>
              </div>
            </section>
          )}

          {data.id === 13 && (
            <section className="mt-10">
              <div className="mb-10">
                <p className="mb-3">
                  Hipotermia sendiri adalah kondisi tubuh di mana sistem
                  pengaturan suhu di dalam tubuh kesulitan mengatasi tekanan
                  suhu dingin. Jika gak segera diatasi, hal ini jelas akan
                  membahayakan tubuh, bahkan ada beberapa kasus di mana
                  hipotermia ini menyebabkan kematian.
                </p>
                <p className="mb-3">
                  Oleh sebab itu, persiapan optimal tentu harus dilakukan,
                  apalagi bagi yang baru pertama kali mendaki gunung. Nah, buat
                  kalian yang berencana ingin mendaki gunung dalam waktu dekat,
                  ada tips khusus untuk mencegah hipotermia nih. Penasaran?
                  Simak ulasan lengkapnya di bawah!
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  1. Hindari pendakian di malam hari
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img34} alt="" />
                </div>
                <p className="mb-3">
                  Kebanyakan pendaki pasti akan berusaha melakukan pendakian di
                  tengah malam. Hal ini karena mereka ingin tiba di puncak
                  gunung saat fajar menjelang sehingga bisa menyaksikan sunrise
                  di puncak gunung.
                </p>
                <p className="mb-3">
                  Sayangnya, hal ini gak selamanya baik terutama bagi tubuh.
                  Suhu pegunungan di malam hari yang sangat dingin bisa membuat
                  seseorang mengalami hipotermia. Untuk itu, jika gak siap
                  dengan udara malam pegunungan, sebaiknya urungkan niat untuk
                  mendaki di malam hari dan lakukan di siang hari saja.
                </p>

                <h2 className="text-xl font-semibold">
                  2. Gunakan peralatan lengkap
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img35} alt="" />
                </div>
                <p className="mb-3">
                  Kebanyakan pendaki yang terkena hipotermia seringkali
                  disebabkan oleh kurangnya peralatan yang mereka bawa atau
                  gunakan. Bahkan, pada beberapa kasus, pendaki yang terkena
                  hipotermia diketahui hanya mengenakan jaket yang tipis
                  sehingga memudahkannya untuk terserang hipotermia.
                </p>
                <p className="mb-3">
                  Oleh karena itu, gunakanlah perlengkapan super lengkap, mulai
                  dari jaket gunung yang tahan air, angin, dan dingin, penutup
                  kepala, sarung tangan, kaos kaki tebal, sepatu, hingga celana
                  yang hangat. Kemudian, bawalah baju ganti yang akan dikenakan
                  saat terguyur hujan, sleeping bag untuk menjaga pendaki dari
                  dinginnya udara pegunungan, dan matras untuk melindungi diri
                  kita dari dinginnya tanah pegunungan.
                </p>

                <h2 className="text-xl font-semibold">
                  3. Hindari kontak langsung dengan air
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img36} alt="" />
                </div>
                <p className="mb-3">
                  berpotensi kehujanan, namun minimalkan kontak langsung dengan
                  air dengan menggunakan jas hujan yang tebal. Kalau pun sudah
                  terlanjur basah, segera ganti pakaianmu yang basah dengan baju
                  ganti untuk membuat tubuh tetap hangat.
                </p>
                <p className="mb-3">
                  Ini karena bila kalian diamkan saja, tubuh akan kesulitan
                  mengatur suhu yang pas. Ancaman hipotermia pun menghantui kita
                  dan bisa datang kapan saja.
                </p>

                <h2 className="text-xl font-semibold">
                  4. Jangan gunakan pakaian berbahan jeans
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img37} alt="" />
                </div>
                <p className="mb-3">
                  Pemakaian gear dengan bahan jeans hanya akan merepotkan
                  pendaki. Bahan jeans yang berat dan mudah menyerap air
                  membuatnya susah kering bila terkena hujan atau cipratan air
                  saat melintasi sungai.
                </p>
                <p className="mb-3">
                  Pada akhirnya pun akan dibuat kerepotan saat celana atau jaket
                  jeans yang dikenakan jadi basah. Oleh karenanya, gunakanlah
                  pakaian yang memang diperuntukkan untuk naik gunung, seperti
                  jaket gunung yang waterproof serta celana kargo yang mempunyai
                  bahan yang hangat.
                </p>

                <h2 className="text-xl font-semibold">
                  5. Jaga perut agar tetap terisi sepanjang waktu
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img38} alt="" />
                </div>
                <p className="mb-3">
                  Salah satu penyebab pendaki terserang hipotermia adalah karena
                  kurangnya asupan makanan berkalori. Tubuh yang kurang
                  berenergi tak mampu melawan dinginnya suhu pegunungan sehingga
                  hipotermia pun rentan terjadi.
                </p>
                <p className="mb-3">
                  Karenanya, jagalah perut agar tetap terisi. Selain membawa
                  peralatan masak dan bahan makanan, setiap pendaki juga
                  diwajibkan untuk membawa camilan. Kalau bisa, bawalah camilan
                  yang tinggi kalori, seperti roti dan makanan manis lainnya.
                </p>

                <h2 className="text-xl font-semibold">
                  6. Akhiri pendakian saat suhu tubuh kurang dari normal
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img39} alt="" />
                </div>
                <p className="mb-3">
                  Hipotermia gak hanya terjadi akibat suhu lingkungan sekitar
                  dan ketinggian pendakian saja, tapi juga bisa disebabkan oleh
                  kondisi suhu tubuh pendaki. Artinya, hipotermia akan mudah
                  menyerang seseorang yang suhu tubuhnya di bawah suhu normal,
                  yakni 35 - 37,5 derajat celcius.
                </p>
                <p className="mb-3">
                  Sebab, saat kurang dari itu respon tubuh dalam mengatur suhu
                  gak akan berfungsi optimal. Jadi, kalau saat mendaki suhu
                  tubuh terasa turun drastis, lebih baik akhiri pendakian demi
                  keselamatan pribadi.
                </p>

                <h2 className="text-xl font-semibold">
                  7. Pelajari tentang gejala, penyebab, dan penanganan
                  hipotermia
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img40} alt="" />
                </div>
                <p className="mb-3">
                  Persiapan dalam bentuk perlengkapan gunung saja gak cukup,
                  karena kita juga harus mempelajari tentang hipotermia, baik
                  dari gejala, penyebab, hingga penanganannya bila teman
                  sependakian terserang hipotermia.
                </p>
                <p className="mb-3">
                  Gejala hipotermia sendiri sebenarnya bisa langsung dikenali
                  karena hipotermia gak datang secara tiba-tiba dan langsung
                  berakibat fatal. Beberapa gejala yang muncul biasanya berupa
                  halusinasi yang diiringi dengan gak berhentinya menggigil,
                  muntah-muntah, bicara melantur, detak jantung melemah, kulit
                  membiru, dan tekanan darah menurun.
                </p>

                <p className="mb-3">
                  Jika kalian menemukan teman pendaki yang mengalami gejala
                  seperti ini, maka segeralah lakukan penanganan. Masukkan orang
                  yang terkena hipotermia ke dalam tenda guna menghindari
                  hembusan angin gunung. Lalu, gantilah bajunya yang sudah basah
                  dengan pakaian kering.
                </p>

                <p className="mb-3">
                  Untuk pendaki perempuan, pastikan kalau ada sesama pendaki
                  perempuan lainnya untuk mengatasi hal seperti ini.
                  Selanjutnya, berilah ia minuman hangat dan hangatkan badannya
                  dengan mengenakan jaket, penutup kepala, kaos kaki, sarung
                  tangan.{" "}
                </p>
                <p className="mb-3">
                  Jika ia masih menggigil, maka peluklah secara erat secara
                  beramai-ramai supaya tubuhnya tetap hangat. Kalau
                  memungkinkan, buatlah api unggun di luar tenda supaya hantaran
                  panasnya bisa mengenai tubuh orang yang terkena hipotermia.
                </p>
              </div>
            </section>
          )}

          {data.id === 14 && (
            <section className="mt-10">
              <div className="mb-10">
                <p className="mb-3">
                  Mendaki gunung, melintasi jalur panjang, dan menikmati
                  keindahan alam di ketinggian bisa jadi pengalaman luar biasa.
                  Tapi, sebelum berangkat, kamu perlu mempersiapkan fisik dengan
                  matang agar pendakianmu aman dan nyaman. Jangan sampai karena
                  kurang persiapan, perjalanan yang seharusnya menyenangkan
                  justru berakhir dengan rasa lelah atau cedera.
                </p>
                <p className="mb-3">
                  Nah, kali ini kita akan bahas beberapa tips untuk
                  mempersiapkan fisik kamu supaya siap menghadapi pendakian
                  jarak jauh! Yuk, simak!
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  1. Mulai dengan Latihan Kardio
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img41} alt="" />
                </div>
                <p className="mb-3">
                  Pendakian jarak jauh membutuhkan stamina yang prima, dan salah
                  satu cara terbaik untuk mempersiapkannya adalah dengan latihan
                  kardio. Latihan kardio akan membantu meningkatkan kapasitas
                  jantung dan paru-paru, yang sangat penting saat kamu mendaki
                  dengan beban di punggung.
                </p>

                <h3 className="text-lg font-semibold">
                  Latihan kardio yang bisa kamu coba:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Jogging atau lari ringan: Cobalah untuk berlari beberapa
                    kali seminggu, mulai dengan durasi yang nyaman, dan perlahan
                    tingkatkan jaraknya.
                  </li>
                  <li>
                    Bersepeda: Aktivitas ini sangat bagus untuk menguatkan kaki
                    dan jantung tanpa memberi tekanan berlebih pada sendi.
                  </li>

                  <li>
                    Berenang: Selain meningkatkan daya tahan tubuh, berenang
                    juga melatih kekuatan otot dengan cara yang lebih lembut.
                  </li>
                </ul>

                <p className="mb-3">
                  Penting untuk meningkatkan durasi latihan secara bertahap agar
                  tubuhmu bisa beradaptasi dengan intensitas yang lebih tinggi.
                </p>

                <h2 className="text-xl font-semibold">
                  2. Latihan Kekuatan Otot Kaki
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img42} alt="" />
                </div>
                <p className="mb-3">
                  Kaki adalah bagian tubuh yang paling banyak bekerja saat
                  mendaki. Untuk itu, sangat penting untuk mempersiapkan otot
                  kaki agar kuat dan tahan lama. Latihan ini bisa membantu
                  mengurangi rasa lelah saat berjalan jauh dan juga menghindari
                  cedera.
                </p>

                <h3 className="text-lg font-semibold">
                  Latihan kardio yang bisa kamu coba:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Squat: Squat adalah latihan dasar untuk menguatkan paha dan
                    otot kaki. Mulailah dengan squat tubuh tanpa beban, kemudian
                    tambahkan beban secara bertahap jika kamu merasa sudah
                    nyaman.
                  </li>
                  <li>
                    Lunges: Latihan ini sangat efektif untuk menguatkan otot
                    paha dan bokong. Lakukan lunges ke depan, belakang, atau
                    samping untuk variasi.
                  </li>

                  <li>
                    Step-up: Menggunakan tangga atau kotak, lakukan gerakan naik
                    dan turun untuk melatih otot kaki bagian depan dan bokong.
                  </li>
                </ul>

                <p className="mb-3">
                  Semakin kuat otot kaki, semakin tahan tubuh kamu menghadapi
                  medan yang berat.
                </p>

                <h2 className="text-xl font-semibold">
                  3. Latihan Ketahanan dengan Trekking Pole
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img43} alt="" />
                </div>
                <p className="mb-3">
                  Trekking pole (tongkat pendaki) adalah alat yang sangat
                  membantu saat mendaki, terutama di jalur berbatu atau licin.
                  Latihan dengan trekking pole bisa membantu tubuh beradaptasi
                  dengan peralatan tersebut dan melatih otot-otot tubuh bagian
                  atas serta mengurangi beban pada kaki.
                </p>

                <h3 className="text-lg font-semibold">
                  Latihan yang bisa dilakukan:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Berjalan dengan trekking pole di medan yang menanjak:
                    Cobalah untuk berjalan di jalan menanjak atau berbatu sambil
                    menggunakan trekking pole. Ini akan membantu kamu melatih
                    kekuatan tubuh bagian atas dan memberi pengalaman langsung
                    dengan alat tersebut.
                  </li>
                  <li>
                    Latihan keseimbangan: Sambil berjalan, coba tambahkan
                    gerakan kecil untuk melatih keseimbangan tubuh dan
                    koordinasi dengan trekking pole.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  4. Latihan Stamina dengan Ransel
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img44} alt="" />
                </div>
                <p className="mb-3">
                  Untuk pendakian jarak jauh, kamu akan membawa ransel dengan
                  berbagai perlengkapan di dalamnya. Latihan dengan membawa
                  ransel yang diberi beban bisa membantu tubuhmu beradaptasi
                  dengan tekanan tambahan.
                </p>

                <h3 className="text-lg font-semibold">
                  Tips latihan dengan ransel:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Mulai dengan beban ringan: Isi ransel dengan perlengkapan
                    yang sesuai dan mulailah berjalan dengan beban ringan.
                    Perlahan-lahan tingkatkan beban jika tubuhmu sudah merasa
                    siap.
                  </li>
                  <li>
                    Berjalan di medan berbukit: Cobalah berjalan di jalur yang
                    menanjak atau berbatu dengan ranselmu. Ini akan melatih
                    kekuatan kaki, punggung, dan tubuh bagian atas.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  5. Fleksibilitas dan Peregangan
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img45} alt="" />
                </div>
                <p className="mb-3">
                  Mendaki gunung dengan jarak jauh membutuhkan kelenturan tubuh
                  agar tidak mudah kaku. Peregangan sebelum dan sesudah latihan
                  sangat penting untuk menjaga otot tetap elastis dan mencegah
                  cedera.
                </p>

                <h3 className="text-lg font-semibold">
                  Peregangan yang bisa kamu coba:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Peregangan paha belakang dan betis: Lakukan peregangan
                    otot-otot yang paling banyak bekerja saat mendaki. Cobalah
                    untuk meregangkan paha belakang, betis, dan pinggul secara
                    perlahan setelah latihan.
                  </li>
                  <li>
                    Peregangan tubuh bagian atas: Jangan lupakan otot punggung
                    dan bahu, terutama jika kamu menggunakan trekking pole atau
                    membawa ransel yang berat.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  6. Latihan Mental dan Persiapan Mental
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img46} alt="" />
                </div>
                <p className="mb-3">
                  Pendakian jarak jauh nggak hanya soal fisik, tetapi juga
                  mental. Tantangan fisik yang berat di gunung bisa menguras
                  energi mental, jadi penting untuk mempersiapkan diri secara
                  mental juga.
                </p>

                <h3 className="text-lg font-semibold">
                  Cara mengasah mental untuk pendakian:
                </h3>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Cobalah pendakian jarak pendek lebih dulu: Sebelum mencoba
                    mendaki gunung yang lebih tinggi, cobalah jalur pendakian
                    jarak pendek untuk membiasakan tubuh dan mental kamu.
                  </li>
                  <li>
                    Tetap positif dan fokus pada tujuan: Kadang-kadang pendakian
                    bisa jadi sangat melelahkan, tetapi penting untuk tetap
                    positif dan ingat tujuanmu untuk mencapai puncak.
                  </li>
                </ul>

                <p className="mb-3">
                  Pendakian jarak jauh memang menantang, tapi dengan persiapan
                  fisik yang tepat, kamu akan lebih siap menghadapi perjalanan
                  tersebut. Mulai dari latihan kardio, latihan kekuatan otot
                  kaki, hingga latihan mental, semua itu penting untuk
                  memaksimalkan pengalamanmu di alam bebas.
                </p>

                <p className="mb-3">
                  Jadi, ayo mulai persiapkan tubuhmu sejak sekarang, Sobat Alam!
                  Dengan fisik yang fit dan mental yang kuat, pendakian jarak
                  jauh bisa jadi pengalaman yang menyenangkan dan penuh
                  petualangan.
                </p>

                <p className="mb-3">
                  Selamat berlatih dan semoga pendakianmu selalu aman dan
                  lancar!
                </p>
              </div>
            </section>
          )}

          {data.id === 15 && (
            <section className="mt-10">
              <div className="mb-10">
                <p className="mb-3">
                  Bukan hanya kekuatan fisik, tetapi juga ketahanan mental yang
                  menentukan keberhasilan pendakian. Bayangkan menghadapi badai
                  salju yang dahsyat di ketinggian ribuan meter, atau terjebak
                  dalam celah sempit di tebing curam. Kemampuan untuk tetap
                  tenang, fokus, dan mengambil keputusan tepat di tengah situasi
                  genting adalah hal yang mutlak dimiliki oleh seorang pendaki
                  profesional.
                </p>
                <p className="mb-3">
                  Disini kita akan membahas secara mendalam berbagai aspek
                  persiapan mental, mulai dari pelatihan fisik yang spesifik
                  hingga strategi menghadapi berbagai skenario darurat di
                  gunung. Kita akan menyelami karakteristik mental seorang
                  pendaki profesional yang sukses, teknik manajemen stres,
                  pentingnya kerja sama tim, dan bagaimana membangun kepercayaan
                  diri untuk mengatasi rasa takut dan tantangan ekstrem lainnya.
                  Dengan memahami persiapan menyeluruh ini, kita dapat mengamati
                  bagaimana para pendaki gunung profesional mampu menaklukkan
                  rintangan alam yang luar biasa.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  A. Fisiologi dan Kebugaran Jasmani Pendaki Profesional
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img47} alt="" />
                </div>
                <p className="mb-3">
                  Pendakian gunung ekstrem merupakan ujian puncak bagi tubuh dan
                  jiwa. Bukan sekadar perjalanan fisik, melainkan perjalanan
                  spiritual yang menuntut keselarasan sempurna antara kekuatan
                  jasmani dan kejernihan mental. Kebugaran fisik yang optimal
                  menjadi landasan utama bagi para pendaki profesional untuk
                  menaklukkan tantangan alam yang ekstrem ini. Persiapan yang
                  matang, jauh melampaui sekadar latihan fisik, melainkan
                  merupakan sebuah proses penyatuan diri dengan alam,
                  mempersiapkan diri untuk menerima dan beradaptasi dengan
                  kekuatan alam yang maha dahsyat.
                </p>

                <p className="mb-3">
                  Pelatihan yang terstruktur dan disiplin merupakan kunci
                  keberhasilan. Bukan hanya soal kekuatan otot, tetapi juga
                  tentang daya tahan, keseimbangan, dan ketahanan mental yang
                  terlatih menghadapi tekanan fisik dan mental yang luar biasa.
                  Proses ini adalah sebuah meditasi dalam gerak, sebuah
                  perenungan diri melalui tantangan fisik yang memacu
                  pertumbuhan spiritual.
                </p>

                <h2 className="text-xl font-semibold">
                  1. Pelatihan Fisik Spesifik untuk Pendakian Ekstrem
                </h2>
                <p className="mb-3">
                  Program latihan pendaki profesional dirancang untuk membangun
                  kekuatan, daya tahan kardiovaskular, dan kekuatan otot yang
                  spesifik untuk menghadapi tantangan pendakian gunung. Latihan
                  ini tidak hanya berfokus pada kekuatan semata, tetapi juga
                  pada kelenturan, keseimbangan, dan koordinasi tubuh yang
                  harmonis. Setiap latihan dijalani sebagai sebuah ritual,
                  sebuah penghormatan kepada alam dan kepada kemampuan diri
                  sendiri.
                </p>
                <p className="mb-3">
                  Latihan kardiovaskular, seperti lari jarak jauh di medan yang
                  bervariasi, mendaki bukit dengan beban, dan bersepeda,
                  membangun daya tahan jantung dan paru-paru. Latihan kekuatan,
                  seperti angkat beban, latihan beban tubuh, dan panjat tebing,
                  membangun kekuatan otot yang dibutuhkan untuk membawa beban
                  berat dan mengatasi medan yang sulit. Latihan daya tahan,
                  seperti trekking jarak jauh dengan beban, melatih tubuh untuk
                  bertahan dalam kondisi yang berat dan menuntut.
                </p>

                <h2 className="text-xl font-semibold">
                  2. Cedera Umum dan Pencegahannya
                </h2>

                <p className="mb-3">
                  Memahami potensi cedera dan menerapkan langkah pencegahan yang
                  tepat sangat penting. Ini bukan sekadar menghindari risiko,
                  tetapi juga sebuah bentuk penghormatan kepada tubuh yang
                  menjadi kendaraan kita dalam perjalanan spiritual ini.
                </p>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Cedera lutut: Pencegahannya meliputi pemanasan yang
                    menyeluruh sebelum aktivitas, penggunaan sepatu dan tongkat
                    trekking yang tepat, serta latihan penguatan otot kaki
                    secara teratur.
                  </li>
                  <li>
                    Keseleo pergelangan kaki: Pencegahannya meliputi penggunaan
                    sepatu yang sesuai, latihan keseimbangan, dan teknik
                    berjalan yang benar di medan yang tidak rata.
                  </li>

                  <li>
                    Hipotermia: Pencegahannya meliputi penggunaan pakaian yang
                    tepat, manajemen suhu tubuh yang baik, dan pemahaman kondisi
                    cuaca.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  3. Program Nutrisi Optimal
                </h2>

                <p className="mb-3">
                  Nutrisi yang tepat adalah bahan bakar bagi perjalanan
                  spiritual kita. Asupan nutrisi yang tepat sebelum, selama, dan
                  setelah pendakian ekstrem sangat penting untuk menjaga energi,
                  memperbaiki jaringan tubuh, dan meminimalisir risiko cedera.
                  Ini adalah bentuk meditasi melalui pengasuhan tubuh yang kita
                  tempati.
                </p>

                <p className="mb-3">
                  Sebelum pendakian: Konsumsi makanan kaya karbohidrat kompleks
                  untuk energi berkelanjutan, protein untuk membangun dan
                  memperbaiki otot, dan lemak sehat untuk fungsi tubuh optimal.
                  Selama pendakian: Konsumsi makanan ringan yang mudah dicerna
                  dan kaya energi, seperti buah kering, kacang-kacangan, dan bar
                  energi. Setelah pendakian: Konsumsi makanan yang kaya protein
                  dan karbohidrat untuk pemulihan otot dan pengisian energi.
                </p>

                <h2 className="text-xl font-semibold">
                  4. Latihan Pernapasan dan Meditasi
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img49} alt="" />
                </div>

                <p className="mb-3">
                  Latihan pernapasan dan meditasi adalah kunci untuk
                  meningkatkan daya tahan dan fokus mental selama pendakian. Ini
                  bukan sekadar latihan fisik, tetapi juga latihan spiritual
                  untuk menyatukan tubuh, pikiran, dan jiwa.
                </p>

                <p className="mb-3">
                  Contoh latihan pernapasan: Teknik pernapasan diafragma, yang
                  melibatkan pernapasan dalam dan penuh, membantu menenangkan
                  pikiran dan meningkatkan oksigenasi tubuh. Contoh meditasi:
                  Meditasi berjalan, yang melibatkan fokus pada sensasi fisik
                  saat berjalan, membantu meningkatkan kesadaran dan fokus
                  mental. Dengan latihan ini, pendaki akan mampu menghadapi
                  tantangan fisik dan mental dengan lebih tenang dan fokus.
                </p>

                <h2 className="text-xl font-semibold">
                  5. Psikologi dan Mentalitas Pendaki Gunung Profesional
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img50} alt="" />
                </div>

                <p className="mb-3">
                  Mendaki gunung, terutama pada level profesional, bukanlah
                  sekadar uji fisik; ia adalah perjalanan spiritual yang
                  mendalam, sebuah pertarungan batin yang menguji batas mental
                  dan emosional. Keberhasilan pendaki profesional tidak hanya
                  ditentukan oleh kekuatan otot dan stamina, tetapi juga oleh
                  ketahanan mental yang luar biasa, kemampuan beradaptasi yang
                  tinggi, dan kesadaran diri yang mendalam. Mereka adalah para
                  pejuang yang mampu menaklukkan bukan hanya puncak gunung,
                  tetapi juga ketakutan dan keraguan dalam diri mereka sendiri.
                </p>

                <p className="mb-3">
                  Keberhasilan pendakian ekstrem memerlukan pemahaman mendalam
                  tentang diri sendiri dan kemampuan untuk mengelola pikiran dan
                  emosi dalam kondisi yang sangat menantang. Ini merupakan
                  proses penempaan diri yang terus-menerus, sebuah perjalanan
                  menuju pencerahan diri di tengah alam yang liar dan tak
                  terduga.
                </p>

                <h2 className="text-xl font-semibold">
                  6. Karakteristik Mental Pendaki Gunung Profesional yang Sukses
                </h2>

                <p className="mb-3">
                  Pendaki gunung profesional yang sukses memiliki beberapa
                  karakteristik mental yang membedakan mereka. Mereka bukan
                  hanya kuat secara fisik, tetapi juga tangguh secara mental.
                  Mereka memiliki ketahanan mental yang luar biasa, mampu
                  menghadapi kegagalan dan tekanan tanpa kehilangan semangat.
                  Mereka mampu menjaga fokus dan ketenangan di tengah badai
                  salju atau saat menghadapi situasi darurat yang mengancam
                  jiwa. Kemampuan mereka untuk tetap tenang dan berpikir jernih
                  di bawah tekanan merupakan kunci keberhasilan mereka.
                </p>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Ketahanan mental yang luar biasa dan kemampuan untuk
                    mengatasi tekanan ekstrem.
                  </li>
                  <li>
                    Fokus dan konsentrasi yang tinggi, bahkan dalam kondisi yang
                    menantang.
                  </li>

                  <li>
                    Kemampuan untuk berpikir jernih dan membuat keputusan yang
                    tepat di bawah tekanan.
                  </li>
                  <li>
                    Sikap optimis dan percaya diri yang kuat, bahkan di hadapan
                    tantangan yang besar.
                  </li>
                  <li>
                    Kesadaran diri yang tinggi dan kemampuan untuk mengelola
                    emosi secara efektif.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  7. Kerja Sama Tim dan Komunikasi yang Efektif
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img51} alt="" />
                </div>

                <p className="mb-3">
                  Pendakian gunung profesional hampir selalu dilakukan secara
                  tim. Keberhasilan pendakian sangat bergantung pada kerja sama
                  tim yang solid dan komunikasi yang efektif. Setiap anggota tim
                  harus saling percaya, saling mendukung, dan berkomunikasi
                  secara terbuka dan jujur. Kemampuan untuk mendengarkan dan
                  memahami perspektif orang lain sangat penting dalam mengatasi
                  situasi sulit.
                </p>

                <p className="mb-3">
                  Contohnya, dalam situasi darurat seperti badai salju,
                  komunikasi yang cepat dan tepat dapat menyelamatkan nyawa.
                  Kemampuan untuk bekerja sama dalam mengambil keputusan dan
                  melaksanakan rencana tindakan merupakan kunci keberhasilan
                  dalam menghadapi tantangan.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  B. Persiapan Perlengkapan dan Logistik
                </h2>
                <div className="w-full mx-auto my-5 lg:w-8/12 md:w-10/12 sm:w-11/12">
                  <img src={img52} alt="" />
                </div>

                <p className="mb-3">
                  Pendakian gunung ekstrem adalah perjalanan spiritual menuju
                  puncak, sebuah pertarungan melawan alam yang menuntut kesiapan
                  total. Bukan hanya kekuatan fisik, tetapi juga kesiapan
                  logistik dan perlengkapan yang mumpuni akan menentukan
                  keberhasilan dan keselamatan perjalanan. Persiapan ini bukan
                  sekadar daftar barang, melainkan sebuah meditasi atas
                  kemungkinan dan antisipasi terhadap tantangan yang akan
                  dihadapi, sebuah persembahan kepada gunung yang kita hormati.
                </p>

                <p className="mb-3">
                  Dengan setiap item yang dipilih dengan cermat, kita membangun
                  rasa percaya diri dan ketenangan batin, mempersiapkan diri
                  untuk menghadapi ketidakpastian dengan bijaksana. Membawa
                  perlengkapan yang tepat adalah manifestasi dari rasa hormat
                  dan kesiapan kita untuk menghadapi tantangan yang menanti.
                </p>

                <h2 className="text-xl font-semibold">
                  1. Daftar Perlengkapan Penting Pendaki Gunung Profesional
                </h2>

                <p className="mb-3">
                  Memilih perlengkapan untuk pendakian ekstrem adalah seni dan
                  ilmu pengetahuan. Setiap item harus dipilih berdasarkan
                  fungsinya yang vital dan daya tahannya dalam kondisi ekstrem.
                  Berikut daftar perlengkapan penting yang wajib dibawa,
                  diiringi alasan pemilihannya.
                </p>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Ransel berkapasitas besar (70-100 liter): Untuk menampung
                    seluruh perlengkapan dan logistik selama pendakian.
                  </li>
                  <li>
                    Tenda gunung 3 season atau 4 season: Memberikan perlindungan
                    dari cuaca ekstrem, disesuaikan dengan kondisi medan dan
                    musim pendakian.
                  </li>

                  <li>
                    Sleeping bag dan sleeping pad: Menjaga suhu tubuh tetap
                    hangat dan nyaman di ketinggian dan suhu dingin ekstrem.
                  </li>
                  <li>
                    Peralatan masak kompor gas portable dan bahan bakar: Untuk
                    menyediakan energi dan nutrisi selama pendakian.
                  </li>
                  <li>
                    Perlengkapan navigasi (peta topografi, kompas, GPS,
                    altimeter): Memastikan perjalanan tetap terarah dan aman.
                  </li>
                  <li>
                    Perlengkapan pertolongan pertama yang lengkap: Untuk
                    menangani cedera ringan hingga sedang.
                  </li>
                  <li>
                    Pakaian pendakian yang sesuai dengan cuaca: Termasuk jaket
                    tahan air dan angin, baju hangat, kaos, celana pendakian,
                    dan sarung tangan.
                  </li>
                  <li>
                    Sepatu pendakian yang kokoh dan nyaman: Untuk melindungi
                    kaki dan memberikan traksi yang baik di medan yang sulit.
                  </li>
                  <li>
                    Perlengkapan pendakian lainnya (seperti headlamp, pisau,
                    tali, dll.): Bergantung pada kondisi medan dan kebutuhan
                    spesifik pendakian.
                  </li>
                  <li>
                    Makanan dan minuman yang cukup: Memberikan energi dan
                    nutrisi yang dibutuhkan selama pendakian.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  2. Cara Mengemas Ransel dengan Efisien dan Efektif
                </h2>

                <p className="mb-3">
                  Mengemas ransel dengan efisien dan efektif adalah kunci
                  kenyamanan dan keselamatan selama pendakian. Barang-barang
                  berat harus diletakkan di dekat punggung untuk menjaga
                  keseimbangan. Barang yang sering dibutuhkan harus mudah
                  diakses.
                </p>

                <p className="mb-3">
                  Teknik packing yang tepat akan meminimalisir beban yang tidak
                  perlu dan memastikan keseimbangan berat badan pada punggung.
                  Teknik ini melibatkan penataan barang-barang secara
                  sistematis, mulai dari barang-barang terberat di bagian bawah
                  dan dekat punggung, hingga barang-barang ringan dan yang
                  sering diakses di bagian atas.
                </p>

                <h2 className="text-xl font-semibold">
                  3. Prosedur Pertolongan Pertama untuk Cedera Umum
                </h2>

                <p className="mb-3">
                  Kesiapsiagaan dalam pertolongan pertama adalah bagian penting
                  dari persiapan mental dan fisik pendaki. Mengetahui cara
                  menangani cedera umum dapat menyelamatkan nyawa, baik diri
                  sendiri maupun rekan pendaki.
                </p>

                <ul className="pl-5 space-y-2 leading-relaxed list-disc list-outside">
                  <li>
                    Luka ringan: Bersihkan luka dengan air bersih dan
                    antiseptik, tutup dengan perban steril.
                  </li>
                  <li>
                    Patah tulang: Imobilisasi bagian tubuh yang patah dengan
                    menggunakan splint atau alat improvisasi, cari bantuan medis
                    sesegera mungkin.
                  </li>

                  <li>
                    Hipotermia: Segera cari tempat yang hangat, ganti pakaian
                    basah dengan pakaian kering, berikan minuman hangat (jika
                    sadar).
                  </li>
                  <li>
                    Luka bakar: Dinginkan area yang terbakar dengan air dingin
                    mengalir, jangan pecahkan lepuh, tutup dengan perban steril.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold">
                  4. Strategi Navigasi Efektif untuk Pendakian Gunung Ekstrem
                </h2>

                <p className="mb-3">
                  Navigasi yang tepat adalah kunci keselamatan dalam pendakian
                  gunung ekstrem. Pemahaman yang mendalam tentang penggunaan
                  peta, kompas, dan GPS sangat penting untuk menghindari
                  tersesat.
                </p>

                <p className="mb-3">
                  Sebelum memulai pendakian, pelajari peta topografi dengan
                  teliti, tentukan rute yang akan dilalui, dan pahami kondisi
                  medan. Kompas digunakan untuk menentukan arah, sementara GPS
                  memberikan informasi posisi secara akurat. Kemampuan membaca
                  peta dan menggabungkan informasi dari ketiga alat tersebut
                  adalah keterampilan yang harus dikuasai.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold">
                  Akhir Kata: Persiapan Mental Pendaki Gunung Profesional Untuk
                  Menghadapi Tantangan Ekstrem
                </h2>
                <p className="mb-10">
                  Menaklukkan puncak gunung bukan hanya soal kekuatan fisik,
                  tetapi juga tentang kekuatan mental yang tak tergoyahkan.
                  Persiapan mental yang matang, dipadukan dengan pelatihan fisik
                  yang intensif dan perencanaan yang cermat, akan meningkatkan
                  peluang keberhasilan pendakian dan mengurangi risiko
                  kecelakaan. Dengan memahami strategi menghadapi tantangan
                  ekstrem, membangun kepercayaan diri, dan mengasah kemampuan
                  kerja sama tim, para pendaki gunung profesional mampu
                  menghadapi situasi terberat sekalipun dan pulang dengan
                  selamat.
                </p>
              </div>
            </section>
          )}
        </section>
      </div>
    );
  }
}
