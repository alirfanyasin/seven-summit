export default function IdealWeather() {
  return (
    <section className="container mt-32">
      <header className="text-center text-skyBlueColor">
        <h2 className="mb-8 text-2xl font-bold lg:text-4xl">
          Cuaca Ideal Pendakian
        </h2>
      </header>

      <div class="overflow-x-auto bg-glass text-white shadow-md rounded-lg">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="px-6 py-3 text-left">Gunung</th>
              <th class="px-6 py-3 text-left">Musim Kemarau (Ideal)</th>
              <th class="px-6 py-3 text-left">Musim Hujan (Kurang Ideal)</th>
              <th class="px-6 py-3 text-left">Catatan Khusus Musim Hujan</th>
            </tr>
          </thead>
          <tbody class="text-gray-200">
            <tr class="border-b">
              <td class="px-6 py-4">Semeru</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Ditutup selama musim hujan untuk pemulihan ekosistem oleh
                pengelola TNBTS.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4">Arjuno</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Jalur licin, risiko longsor. Sebaiknya dihindari saat hujan
                lebat.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4">Welirang</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Kombinasikan dengan Arjuno, jalur batuan lebih licin saat hujan.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4">Butak</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Jalur Panderman (Batu) bisa diakses, tetapi risiko kabut tebal
                dan jalur licin meningkat.
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4">Argopuro</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Jalur terpanjang di Jawa Timur. Tidak direkomendasikan musim
                hujan karena risiko banjir kecil.
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4">Lawu</td>
              <td class="px-6 py-4">Mei - Oktober</td>
              <td class="px-6 py-4">November - April</td>
              <td class="px-6 py-4">
                Jalur Cemoro Sewu lebih aman dan pendek jika tetap mendaki saat
                musim hujan.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
